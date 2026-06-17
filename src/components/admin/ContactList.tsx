"use client";

import { useEffect, useState } from "react";
import {
  Box,
  Card,
  CardContent,
  CircularProgress,
  Typography,
} from "@mui/material";
import { ContactSubmission } from "@/types/contact";

export default function ContactList() {
  const [contacts, setContacts] =
    useState<ContactSubmission[]>([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    fetchContacts();
  }, []);

  async function fetchContacts() {
    try {
      const response = await fetch(
        "/api/contacts"
      );

      const data =
        await response.json();

      setContacts(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <Box>
      <Typography
        variant="h4"
        sx={{
          mb: 3,
        }}
      >
        Contact Submissions
      </Typography>

      {contacts.length === 0 ? (
        <Typography>
          No submissions found.
        </Typography>
      ) : (
        contacts.map((contact) => (
          <Card
            key={contact.id}
            sx={{
              mb: 2,
              backgroundColor: "#1a1a1a",
              color: "white",
            }}
          >
            <CardContent>
              <Typography>
                <strong>Name:</strong>{" "}
                {contact.name}
              </Typography>

              <Typography>
                <strong>Email:</strong>{" "}
                {contact.email}
              </Typography>

              <Typography>
                <strong>Message:</strong>{" "}
                {contact.message}
              </Typography>

              <Typography>
                <strong>Date:</strong>{" "}
                {contact.createdAt}
              </Typography>
            </CardContent>
          </Card>
        ))
      )}
    </Box>
  );
}