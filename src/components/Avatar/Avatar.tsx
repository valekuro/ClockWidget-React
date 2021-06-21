import React, { useState, useEffect } from "react";
import styled from "styled-components";
import AvatarPlaceholder from "../../images/2098873.svg";
import { AvatarSizes } from "../Theme";

export interface AvatarProps {
  size: AvatarSizes;
  src?: string;
  alt: string;
  borderStyle?: string;
}

export default function Avatar({ size, src, alt, borderStyle }: AvatarProps) {
  //if src props contains an image you can use it, otherwise get default image.
  //NB. in App.tsx you could uncomment the src property (myImage) to see your image instead of default icon.
  const [url, setUrl] = useState<string>("");
  useEffect(() => {
    src ? setUrl(src) : setUrl(AvatarPlaceholder);
  }, [src]);
  return (
    <AvatarItemContainer>
      <AvatarItem src={url} size={size} alt={alt} borderStyle={borderStyle} />
    </AvatarItemContainer>
  );
}

export const AvatarItem = styled.img<AvatarProps>`
  content: url(${(props) => props.src});
  width: ${(props) => props.theme.avatarSizes[props.size]};
  border-radius: 50%;
  border: ${(props) => props.borderStyle};
`;

export const AvatarItemContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
