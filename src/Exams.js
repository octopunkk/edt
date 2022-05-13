import React from "react";

export let Exams = () => {
  return (
    <div>
      <div className={`clay day`}>PARTIELS</div>
      <br />
      <div className="partielBox">
        <div className="clay card exam">
          Techniques of AI <br />
          <ul>
            <li>Rapport du projet : jeudi 02 juin</li>
            <li>Oral du projet : Samedi 04 juin (Teams)</li>
            <li>Examen écrit : Jeudi 16 juin (15h -> 18h)</li>
          </ul>
        </div>
        <div className="clay card exam">
          Web Technologies <br />
          <ul>
            <li>Projet 1 : 13 avril (rendu)</li>
            <li>Projet 2 : dimanche 15 mai</li>
            <li>Projet 3 : mercredi 08 juin</li>
            <li>Examen écrit : mardi 14 juin (16h -> 19h)</li>
          </ul>
        </div>
        <div className="clay card exam">
          How to make (almost) any experiment... <br />
          <ul>
            <li>Fin des modules : 21 avril</li>
            <li>Présentation du projet : jeudi 16 juin</li>
          </ul>
        </div>
        <div className="clay card exam">
          Digital and IT Governance <br />
          <ul>
            <li>Examen écrit : mercredi 01 juin (15h -> 18h)</li>
          </ul>
        </div>
        <div className="clay card exam">
          Current trends in AI <br />
          <ul>
            <li>Rapport de projet : dimanche 19 juin</li>
            <li>Oral (projet + cours) : mardi 21 juin</li>
          </ul>
        </div>
        <div className="clay card exam">
          GPU/FPGA parallel programming <br />
          <ul>
            <li>Rapport de projet : mardi 07 juin</li>
            <li>Oral : mardi 14 ou mercredi 15 juin</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
