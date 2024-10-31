"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Ticket, Shield, TrendingUp } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-neutral-50 to-neutral-100 dark:from-neutral-950 dark:to-neutral-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-neutral-100/25 dark:bg-grid-neutral-900/25 bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="container mx-auto px-4 py-24 relative">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold tracking-tight mb-6 bg-gradient-to-r from-neutral-900 to-neutral-600 dark:from-neutral-100 dark:to-neutral-400 text-transparent bg-clip-text">
              Secure Ticket Trading Made Simple
            </h1>
            <p className="text-xl text-neutral-600 dark:text-neutral-400 mb-8">
              Buy and sell tickets safely with our escrow service. We protect both buyers and sellers throughout the transaction.
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/buy">Find Tickets</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/sell">Sell Tickets</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <section className="py-20 bg-white dark:bg-neutral-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Ticket className="w-12 h-12 mb-4 text-primary" />
                <CardTitle>List Your Tickets</CardTitle>
              </CardHeader>
              <CardContent>
                Create a listing with ticket details, pricing, and event information. Upload proof of ticket ownership.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Shield className="w-12 h-12 mb-4 text-primary" />
                <CardTitle>Secure Escrow</CardTitle>
              </CardHeader>
              <CardContent>
                Funds are held safely in escrow until the ticket transfer is verified and confirmed by both parties.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <TrendingUp className="w-12 h-12 mb-4 text-primary" />
                <CardTitle>Complete Transfer</CardTitle>
              </CardHeader>
              <CardContent>
                Once the transfer is confirmed, funds are released to the seller and tickets are securely transferred to the buyer.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Listings */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Tickets</h2>
          <Tabs defaultValue="concerts" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto md:grid-cols-3">
              <TabsTrigger value="concerts">Concerts</TabsTrigger>
              <TabsTrigger value="sports">Sports</TabsTrigger>
              <TabsTrigger value="theater">Theater</TabsTrigger>
            </TabsList>
            <TabsContent value="concerts" className="mt-8">
              <div className="grid md:grid-cols-3 gap-6">
                {[1, 2, 3].map((i) => (
                  <Card key={i} className="overflow-hidden">
                    <div className="aspect-video bg-neutral-100 dark:bg-neutral-800" />
                    <CardContent className="p-4">
                      <h3 className="font-semibold mb-2">Taylor Swift - Eras Tour</h3>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                        Aug 15, 2024 • Los Angeles, CA
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="font-bold">$450</span>
                        <Button size="sm">View Details</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="sports" className="mt-8">
              <div className="grid md:grid-cols-3 gap-6">
                {[1, 2, 3].map((i) => (
                  <Card key={i} className="overflow-hidden">
                    <div className="aspect-video bg-neutral-100 dark:bg-neutral-800" />
                    <CardContent className="p-4">
                      <h3 className="font-semibold mb-2">Lakers vs Warriors</h3>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                        Dec 25, 2024 • Crypto.com Arena
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="font-bold">$350</span>
                        <Button size="sm">View Details</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="theater" className="mt-8">
              <div className="grid md:grid-cols-3 gap-6">
                {[1, 2, 3].map((i) => (
                  <Card key={i} className="overflow-hidden">
                    <div className="aspect-video bg-neutral-100 dark:bg-neutral-800" />
                    <CardContent className="p-4">
                      <h3 className="font-semibold mb-2">Hamilton</h3>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                        Sep 30, 2024 • Broadway, NY
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="font-bold">$299</span>
                        <Button size="sm">View Details</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </main>
  );
}