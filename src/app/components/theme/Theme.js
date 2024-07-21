'use client';

import React, { useState, useEffect } from 'react';
import { Switch, FormControlLabel } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Styles from './theme.module.css'

const lightTheme = createTheme({
    palette: {
        mode: 'light',
    },
});

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

const DarkModeToggle = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setIsDarkMode(savedTheme === 'dark');
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
        document.body.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
    }, [isDarkMode]);

    return (
        <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme} className={Styles.container}>
            <div className={Styles.darkMode}>
                <FormControlLabel className={Styles.text}
                    control={<Switch checked={isDarkMode} onChange={() => setIsDarkMode(!isDarkMode)} />}
                    label={isDarkMode ? 'Claro' : 'Escuro'}

                />
                {children}
            </div>
        </ThemeProvider>
    );
};

export default DarkModeToggle;
