"use client";
import { useRouter } from 'next/router';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Upload } from "lucide-react";
import { useState } from 'react';
import QRCode from 'react-qr-code';
import { ReclaimProofRequest } from '@reclaimprotocol/js-sdk';
import { db } from "@/lib/firebaseConfig"; 
import { collection, addDoc } from "firebase/firestore";


export default function SellPage() {
  const [requestUrl, setRequestUrl] = useState('');
  const [proofs, setProofs] = useState(null);
  const [showTooltip, setShowTooltip] = useState(false);
  const [eventType, setEventType] = useState('');
  const [eventName, setEventName] = useState('');
  const [venue, setVenue] = useState('');
  const [shortcode, setShortcode] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  const getVerificationReq = async (e) => {
    e.preventDefault();
    // Your credentials from the Reclaim Developer Portal
    // Replace these with your actual credentials


    const APP_ID = '0xc50E6EF6aF44033ed0d7E6D35F61cf925Cd30007';
    const APP_SECRET = '0x3524a55ca7c1799189ebeda9cb1de6ee43edce4b7f72c08afd7fad12b8707fcd';
    const PROVIDER_ID = '2e167c7d-a7f4-45fb-bcc4-6b6767e196d3';
 
   // Initialize the Reclaim SDK with your credentials
   const reclaimProofRequest = await ReclaimProofRequest.init(APP_ID, APP_SECRET, PROVIDER_ID,{log:true});
   reclaimProofRequest.setParams({ shortcode: shortcode })
 
   // Generate the verification request URL
   const requestUrl = await reclaimProofRequest.getRequestUrl();
   console.log('Request URL:', requestUrl);
   setRequestUrl(requestUrl);

   // Record the start time
   const startTime = Date.now();

   // Start listening for proof submissions
   await reclaimProofRequest.startSession({
     // Called when the user successfully completes the verification
     onSuccess: (proofs) => {
       // Calculate the elapsed time
       const endTime = Date.now();
       const timeTaken = (endTime - startTime) / 1000; // Convert to seconds
       const prooof = JSON.parse(proofs.claimData.context);
       console.log(prooof);
       console.log(prooof.extractedParameters);
       console.log('Verification success', proofs);
       console.log(`Time taken for verification: ${timeTaken} seconds`);
       setProofs(proofs);


       // Check if the eventName matches the extracted name
       console.log('Extracted Name:', prooof.extractedParameters.name);
       console.log("Event Name:", eventName);
       if (prooof.extractedParameters.name === eventName) {
         // Call handleListTickets if the names match
         handleListTickets();

         // Redirect to /buy after adding the data
         window.location.href = '/buy';
       } else {
         // Show an error if the names do not match
         console.error('Event name does not match the verified name.');
         alert('Event name does not match the verified name.');
       }
     },
     // Called if there's an error during verification
     onError: (error) => {
       console.error('Verification failed', error);

       // Add your error handling logic here, such as:
       // - Showing error message to user
       // - Resetting verification state
       // - Offering retry options
     },
   });
 };

 const handleListTickets = async () => {

   console.log("Listing Tickets with the following details:");
   console.log("Event Type:", eventType);
   console.log("Event Name:", eventName);
   console.log("Venue:", venue);
   console.log("Shortcode:", shortcode);
   console.log("Price:", price);
   console.log("Description:", description);

   try {
     const docRef = await addDoc(collection(db, "tickets"), {
       eventType,
       eventName,
       venue,
       shortcode,
       price: parseFloat(price),
       description,
     });
     console.log("Document written with ID: ", docRef.id);
     router.push('/buy');
   } catch (e) {
     console.error("Error adding document: ", e);
   }
 };

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 py-12">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">List Your Tickets</h1>
          <p className="text-neutral-600 dark:text-neutral-400">
            Fill out the details below to list your tickets securely on our platform
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Ticket Information</CardTitle>
            <CardDescription>
              Provide accurate details about your tickets to help buyers make informed decisions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-8">
              <div className="grid gap-6">
                <div className="space-y-2">
                  <Label htmlFor="event-type">Event Type</Label>
                  <Select onValueChange={setEventType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select event type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="concert">Concert</SelectItem>
                      <SelectItem value="sports">Sports</SelectItem>
                      <SelectItem value="theater">Theater</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="event-name">Event Name</Label>
                  <Input
                    id="event-name"
                    placeholder="e.g., Coldplay - Music of the Spheres Tour"
                    value={eventName}
                    onChange={(e) => setEventName(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="venue">Venue</Label>
                  <Input
                    id="venue"
                    placeholder="e.g., SoFi Stadium"
                    value={venue}
                    onChange={(e) => setVenue(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="shortcode">Shortcode</Label>
                  <Input
                    id="shortcode"
                    placeholder="Enter the shortcode of the event"
                    value={shortcode}
                    onChange={(e) => setShortcode(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="price">Price per Ticket (INR)</Label>
                  <Input
                    id="price"
                    type="number"
                    min="0"
                    step="0.01"
                    placeholder="Enter price per ticket"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>
                {requestUrl && (
       <div style={{ margin: '20px 0' }}>
         <QRCode value={requestUrl} />
         {/* Display the request URL */}
         <p>Request URL: {requestUrl}</p>
       </div>
     )}

                <div className="space-y-2">
                  <Label htmlFor="description">Additional Details</Label>
                  <Textarea
                    id="description"
                    placeholder="Add any additional information about your tickets"
                    rows={4}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex justify-end space-x-4">
                <Button variant="outline">Save as Draft</Button>
                <Button onClick={getVerificationReq}>Get Verification Request</Button>
     {/* Display QR code when URL is available */}
    
     {proofs && (
       <div>
         <h2>Verification Successful!</h2>
         <pre>{JSON.stringify(proofs, null, 2)}</pre>
       </div>
     )}
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}