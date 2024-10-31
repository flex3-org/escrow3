"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Upload } from "lucide-react";

export default function SellPage() {
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
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select event type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="concert">Concert</SelectItem>
                      <SelectItem value="sports">Sports</SelectItem>
                      <SelectItem value="theater">Theater</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="event-name">Event Name</Label>
                  <Input id="event-name" placeholder="e.g., Taylor Swift - Eras Tour" />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="event-date">Event Date</Label>
                    <Input id="event-date" type="date" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="event-time">Event Time</Label>
                    <Input id="event-time" type="time" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="venue">Venue</Label>
                  <Input id="venue" placeholder="e.g., SoFi Stadium" />
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="section">Section</Label>
                    <Input id="section" placeholder="e.g., 134" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="row">Row</Label>
                    <Input id="row" placeholder="e.g., 20" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="seats">Seats</Label>
                    <Input id="seats" placeholder="e.g., 15-16" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="quantity">Number of Tickets</Label>
                  <Input id="quantity" type="number" min="1" placeholder="Enter number of tickets" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="price">Price per Ticket (USD)</Label>
                  <Input id="price" type="number" min="0" step="0.01" placeholder="Enter price per ticket" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Additional Details</Label>
                  <Textarea
                    id="description"
                    placeholder="Add any additional information about your tickets"
                    rows={4}
                  />
                </div>

                <div className="space-y-2">
                  <Label>Upload Ticket Proof</Label>
                  <div className="border-2 border-dashed rounded-lg p-8 text-center">
                    <Upload className="mx-auto h-12 w-12 text-neutral-400 mb-4" />
                    <div className="space-y-2">
                      <p className="text-sm text-neutral-600 dark:text-neutral-400">
                        Drag and drop your ticket files here, or click to select files
                      </p>
                      <p className="text-xs text-neutral-500">
                        Supported formats: PDF, JPG, PNG (Max size: 10MB)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-end space-x-4">
                <Button variant="outline">Save as Draft</Button>
                <Button>List Tickets</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}