
import styled, { keyframes } from 'styled-components';
import { bounce,bounceInLeft,bounceInRight } from 'react-animations';

export const bounceAnimation = keyframes`${bounce}`;
export const entryLeft=keyframes`${bounceInLeft}`;
export const entryRight=keyframes`${bounceInRight}`;
