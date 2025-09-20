"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import EnhancedContact from "../Components/EnhancedContact";

const Contacts = () => {
  return (
    <div className="mt-12 sm:mt-16 lg:mt-20 px-4 sm:px-6 lg:px-8">
      {/* Go Back Button */}
      <div className="mb-6">
        <Link href="/">
          <Button variant="outline" className="hover:scale-105 transition-transform">
            ← Go Back
          </Button>
        </Link>
      </div>

      <EnhancedContact />
    </div>
  );
};

export default Contacts;
