import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contacts", async (req, res) => {
    try {
      const validation = insertContactSchema.safeParse(req.body);
      
      if (!validation.success) {
        const error = fromZodError(validation.error);
        return res.status(400).json({
          message: "Validation failed",
          errors: error.details,
        });
      }

      const contact = await storage.createContact(validation.data);
      
      res.status(201).json({
        message: "Contact form submitted successfully",
        contact: { id: contact.id, createdAt: contact.createdAt },
      });
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(500).json({
        message: "Failed to submit contact form. Please try again later.",
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
