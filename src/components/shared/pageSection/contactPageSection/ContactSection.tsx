"use client";
import ContactForm from "@/components/template/form/ContactForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { contactInfo } from "@/constants";
import { useMyContext } from "@/contexts/MyContext";
import React from "react";

export default function ContactSection() {
  const { theme } = useMyContext();
  return (
    <div
      className={` px-4 md:px-8 py-16 ${
        theme === "dark" ? "bg-[#09090B]" : "bg-white"
      }`}
    >
      <div className="max-w-[1350px] w-full mx-auto">
        <header className="text-center mb-12">
          <h1
            className={`font-orbitron text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent`}
          >
            Contact Me
          </h1>
        </header>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Information Card */}
          <Card
            className={`${
              theme === "dark"
                ? "bg-[#09090B] border"
                : "bg-white border border-gray-200"
            }`}
          >
            <CardHeader>
              <CardTitle
                className={`text-3xl font-bold ${
                  theme === "dark" ? "text-white" : "text-[#09090B]"
                } `}
              >
                Abass Dev
              </CardTitle>
            </CardHeader>
            <CardContent>
              <dl className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-3 ${
                      theme === "dark"
                        ? "text-gray-400 hover:text-white"
                        : "text-gray-400 hover:text-black"
                    } transition-colors`}
                  >
                    <info.icon className="h-5 w-5" />
                    <div>
                      <dt className="sr-only">{info.label}</dt>
                      <dd className="text-base">{info.value}</dd>
                    </div>
                  </div>
                ))}
              </dl>

              {/* Additional Information */}
              <div className="mt-8 space-y-4">
                <p className="text-muted-foreground">
                  Feel free to reach out for collaborations, opportunities, or
                  just to say hello! I typically respond within 24 hours.
                </p>
                <div className="flex gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-sm text-muted-foreground">
                    Available for new projects
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Form Card */}
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
