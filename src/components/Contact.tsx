import React, { useState } from "react";
import "../assets/styles/Contact.scss";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";

function Contact() {
  const [nom, setNom] = useState<string>("");
  const [contact, setContact] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const [nomError, setNomError] = useState<boolean>(false);
  const [contactError, setContactError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // ✅ Validation côté front
    const hasNomError = nom.trim() === "";
    const hasContactError = contact.trim() === "";
    const hasMessageError = message.trim() === "";

    setNomError(hasNomError);
    setContactError(hasContactError);
    setMessageError(hasMessageError);

    // ❌ On bloque l’envoi si erreur
    if (hasNomError || hasContactError || hasMessageError) {
      e.preventDefault();
      return;
    }

    // ✅ Si tout est OK : Netlify gère l’envoi
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Me contacter</h1>
          <p>
            Une opportunité d’alternance, un stage ou un projet à me proposer ?
            N’hésitez pas à m’écrire, je vous répondrai rapidement.
          </p>

          <Box
            component="form"
            className="contact-form"
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            action="/success"
            onSubmit={handleSubmit}
            noValidate
            autoComplete="off"
          >
            {/* ✅ Champ obligatoire pour Netlify */}
            <input type="hidden" name="form-name" value="contact" />

            {/* ✅ Honeypot anti-spam */}
            <p style={{ display: "none" }}>
              <label>
                Ne remplissez pas ce champ si vous êtes humain :
                <input name="bot-field" />
              </label>
            </p>

            <div className="form-flex">
              <TextField
                required
                label="Nom"
                placeholder="Quel est votre nom ?"
                name="nom"
                value={nom}
                onChange={(e) => setNom(e.target.value)}
                error={nomError}
                helperText={nomError ? "Veuillez saisir votre nom" : ""}
              />

              <TextField
                required
                label="Email ou téléphone"
                placeholder="Comment puis-je vous recontacter ?"
                name="contact"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                error={contactError}
                helperText={
                  contactError
                    ? "Veuillez saisir une adresse email ou un numéro de téléphone"
                    : ""
                }
              />
            </div>

            <TextField
              required
              label="Message"
              placeholder="Décrivez votre demande ou votre projet"
              name="message"
              multiline
              rows={10}
              className="body-form"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              error={messageError}
              helperText={messageError ? "Veuillez saisir un message" : ""}
            />

            <Button variant="contained" endIcon={<SendIcon />} type="submit">
              Envoyer le message
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;
