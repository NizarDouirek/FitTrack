import React from "react";
import { useNavigate } from "react-router-dom";

export default function RetourButton() {
  const navigate = useNavigate();

  return (
    <button 
      onClick={() => navigate(-1)} 
      style={{
        marginTop: "20px",
        padding: "10px 20px",
        border: "none",
        borderRadius: "8px",
        backgroundColor: "red",
        color: "white",
        cursor: "pointer",
        fontWeight: "bold"
      }}
    >
      ← Retour
    </button>
  );
}
