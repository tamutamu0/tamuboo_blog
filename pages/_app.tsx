import 'tailwindcss/tailwind.css';
import type { AppProps } from 'next/app'
import "types/globals.css";
import Head from 'next/head';
import { Header } from '../components/layouts/Header';
import { useState } from 'react';
import { Container } from '@mui/material';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Container sx={{ p: 4 }}>
        <Component {...pageProps} />
      </Container>
    </>
  )
}
