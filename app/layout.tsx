"use client";

import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Shield } from 'lucide-react';
import { getAuth, signInWithPopup, GoogleAuthProvider, User } from "firebase/auth";
import { useState, useEffect } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  const handleSignIn = async () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      setUser(user);
      console.log("User signed in:", user);
    } catch (error) {
      console.error("Error during sign-in:", error);
    }
  };

  return (
    <html lang="en">
      <body className={cn(inter.className, "min-h-screen bg-background")}>
        <header className="border-b">
          <div className="container mx-auto px-4">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center space-x-2">
                <Shield className="h-6 w-6" />
                <Link href="/" className="text-xl font-bold">
                  Tickets3
                </Link>
              </div>
              <nav className="hidden md:flex items-center space-x-6">
                <Link href="/buy" className="text-sm font-medium">
                  Buy Tickets
                </Link>
                <Link href="/sell" className="text-sm font-medium">
                  Sell Tickets
                </Link>
                <Link href="/how-it-works" className="text-sm font-medium">
                  How It Works
                </Link>
                {user ? (
                  <span className="text-sm font-medium">{user.displayName}</span>
                ) : (
                  <Button variant="outline" size="sm" onClick={handleSignIn}>
                    Sign In
                  </Button>
                )}
                <Button size="sm">Get Started</Button>
              </nav>
            </div>
          </div>
        </header>
        {children}
        <footer className="border-t py-12 mt-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <h3 className="font-semibold mb-4">About</h3>
                <ul className="space-y-2">
                  <li><Link href="#" className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100">About Us</Link></li>
                  <li><Link href="#" className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100">Press</Link></li>
                  <li><Link href="#" className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100">Careers</Link></li>
                  <li><Link href="#" className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100">Contact</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Support</h3>
                <ul className="space-y-2">
                  <li><Link href="#" className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100">Help Center</Link></li>
                  <li><Link href="#" className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100">Safety Center</Link></li>
                  <li><Link href="#" className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100">Legal</Link></li>
                  <li><Link href="#" className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100">Privacy Policy</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Buyers</h3>
                <ul className="space-y-2">
                  <li><Link href="#" className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100">Buy Tickets</Link></li>
                  <li><Link href="#" className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100">Buyer Protection</Link></li>
                  <li><Link href="#" className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100">Trust & Safety</Link></li>
                  <li><Link href="#" className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100">FAQs</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Sellers</h3>
                <ul className="space-y-2">
                  <li><Link href="#" className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100">Sell Tickets</Link></li>
                  <li><Link href="#" className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100">Seller Protection</Link></li>
                  <li><Link href="#" className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100">Seller Tools</Link></li>
                  <li><Link href="#" className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100">Success Stories</Link></li>
                </ul>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t">
              <p className="text-center text-sm text-neutral-600 dark:text-neutral-400">
                © 2024 TicketVault. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}