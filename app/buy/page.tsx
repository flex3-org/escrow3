"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";

export default function BuyPage() {
  const [priceRange, setPriceRange] = useState([0, 1000]);

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Find Tickets</h1>
        
        {/* Search and Filters */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="md:col-span-4 lg:col-span-1">
            <Card className="p-4">
              <h2 className="font-semibold mb-4">Filters</h2>
              
              <div className="space-y-6">
                <div>
                  <label className="text-sm font-medium mb-2 block">Event Type</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="concerts">Concerts</SelectItem>
                      <SelectItem value="sports">Sports</SelectItem>
                      <SelectItem value="theater">Theater</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Location</label>
                  <Input type="text" placeholder="Enter city or venue" />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Date Range</label>
                  <div className="grid grid-cols-2 gap-2">
                    <Input type="date" />
                    <Input type="date" />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Price Range: ${priceRange[0]} - ${priceRange[1]}
                  </label>
                  <Slider
                    min={0}
                    max={1000}
                    step={10}
                    value={priceRange}
                    onValueChange={setPriceRange}
                  />
                </div>

                <Button className="w-full">Apply Filters</Button>
              </div>
            </Card>
          </div>

          {/* Search Results */}
          <div className="md:col-span-4 lg:col-span-3">
            <div className="grid gap-6">
              {[1, 2, 3, 4, 5].map((i) => (
                <Card key={i} className="overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="w-full md:w-48 aspect-video bg-neutral-100 dark:bg-neutral-800 rounded-lg" />
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="text-xl font-semibold mb-2">Taylor Swift - Eras Tour</h3>
                            <p className="text-neutral-600 dark:text-neutral-400">
                              Aug 15, 2024 • SoFi Stadium, Los Angeles
                            </p>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold mb-2">$450</div>
                            <div className="text-sm text-neutral-600 dark:text-neutral-400">
                              Section 134, Row 20
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-green-500" />
                            <span className="text-sm text-neutral-600 dark:text-neutral-400">
                              Verified Seller
                            </span>
                          </div>
                          <Button>View Details</Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}