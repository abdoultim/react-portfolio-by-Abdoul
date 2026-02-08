import React from "react";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";

import "../assets/styles/Success.scss";
import sentAnimation from "../assets/images/emailsent.json";

import Button from "@mui/material/Button";
import HomeIcon from "@mui/icons-material/Home";

function Success() {
  const navigate = useNavigate();

  return (
    <div className="success-page">
      <div className="success-card">
        <div className="success-lottie">
          <Lottie animationData={sentAnimation} loop={false} />
        </div>

        <h1>Message envoyé ✅</h1>
        <p>
          Merci pour votre message ! Il a bien été envoyé. <br />
          Je vous répondrai dès que possible.
        </p>

        <Button
          variant="contained"
          startIcon={<HomeIcon />}
          onClick={() => navigate("/")}
          className="success-btn"
        >
          Retourner sur le portfolio
        </Button>
      </div>
    </div>
  );
}

export default Success;
