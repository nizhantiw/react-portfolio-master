import React from "react";
import "./style.css";
import {
  FaSpotify,
  FaTwitter,
  FaFacebookF,
  FaLinkedin,
  FaYoutube,
  FaInstagramSquare
} from "react-icons/fa";
import { SiApplemusic } from "react-icons/si";
import { socialprofils } from "../../content_option";

export const Socialicons = (params) => {
  return (
    <div className="stick_follow_icon">
      <ul>
        {socialprofils.youtube && (
          <li>
            <a href={socialprofils.youtube}>
              <FaYoutube />
            </a>
          </li>
        )}
        {socialprofils.instagram && (
          <li>
            <a href={socialprofils.instagram}>
              <FaInstagramSquare />
            </a>
          </li>
        )}
        {socialprofils.spotify && (
          <li>
            <a href={socialprofils.spotify}>
              <FaSpotify />
            </a>
          </li>
        )}
        {socialprofils.apple && (
          <li>
            <a href={socialprofils.apple}>
              <SiApplemusic />
            </a>
          </li>
        )}
        {socialprofils.facebook && (
          <li>
            <a href={socialprofils.facebook}>
              <FaFacebookF />
            </a>
          </li>
        )}
        {socialprofils.linkedin && (
          <li>
            <a href={socialprofils.linkedin}>
              <FaLinkedin />
            </a>
          </li>
        )}
      </ul>
      <p>Follow Me</p>
    </div>
  );
};
