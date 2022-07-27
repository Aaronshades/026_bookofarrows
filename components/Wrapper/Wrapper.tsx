import React, { useState } from 'react';
import Link from "next/link";
import Image from 'next/image';
import {useLocalStorage} from "@mantine/hooks";
import { Target, Logout, InfoCircle } from 'tabler-icons-react';
import {
  AppShell,
  Navbar,
  Header,
  MediaQuery,
  Burger,
  useMantineTheme,
  ColorScheme,
  } from '@mantine/core';

import Logo from "../../public/images/logo512.png";
import { ThemeToggle } from "../index";
import { logOut } from "../../auth";
import styles from "./Wrapper.module.css";
import Authentication from "../Authentication/Authentication";

interface IAppContainer {
  children: React.ReactNode;
}

const Wrapper: React.FC<IAppContainer> = ({ children }) => {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'color-scheme',
    defaultValue: 'light',
  });

  const toggleColorScheme = () => setColorScheme((current) => (current === 'dark' ? 'light' : 'dark'));

  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <Authentication>
      <AppShell
        styles={{
          main: {
            display: "flex",
            flexDirection: "column",
            background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
          },
        }}
        navbarOffsetBreakpoint="sm"
        fixed
        navbar={
          <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 148, lg: 200 }}>
            <Navbar.Section grow>
              <Link href="/form">
                <>
                  <Target /> Sikteskjema
                </>
              </Link>
            </Navbar.Section>
            <Navbar.Section style={{ display: 'flex', flexDirection: 'column'}}>
              <Link href="/about" style={{ marginBottom: 16 }}>
                <a>
                  <InfoCircle /> Om oss
                </a>
              </Link>
              <Link href="#">
                <div onClick={logOut}>
                  <Logout />   Logg ut
                </div>
              </Link>
            </Navbar.Section>
          </Navbar>
        }
        header={
          <Header className={styles.header} height={70} p="md">
            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>
            <Link className={styles.brand} href="/user">
              <>
                <Image width={56} height={56} className={styles.logo} src={Logo} alt="Logo"/>
                <h1 className={styles.title}>Book of Arrows</h1>
              </>
            </Link>
            <div className={styles.themeButton}>
              <ThemeToggle colorScheme={colorScheme} toggleColorScheme={toggleColorScheme} />
            </div>
          </Header>
        }
      >
        {children}
      </AppShell>
    </Authentication>
  );
}

export default Wrapper;