import styled, { keyframes } from 'styled-components';
import { flip, slideInLeft, fadeIn } from 'react-animations';
     
const animSlideInLeft = keyframes`${slideInLeft}`
const animFlip = keyframes`${flip}`;
const animFadeIn = keyframes`${fadeIn}`;

export const flipLi = styled.li`animation: 2s ${animFlip}`;
export const fadeInForm = styled.form`animation: 2s ${animFadeIn}`;
export const slideInP = styled.p`animation: 2s ${animSlideInLeft}`