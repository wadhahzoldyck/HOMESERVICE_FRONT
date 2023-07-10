import React, { useState } from 'react';
import { ChakraProvider, theme, useDisclosure } from '@chakra-ui/react';
import { Footer, Header, Home, Navbar } from './components';
import { Routes, Route, Switch } from 'react-router-dom';
import EspaceProfessionnel from './components/EspaceProfessionnel.js/EspaceProfessionnel';
import ServiceComponent from './components/services/ServiceComponent';
import AllServices from './components/services/AllServices';
import ActivateLayout from './components/authentification/Layouts/ActivateLayout/ActivateLayout';
import ActivateLayoutP from './components/authentification/Layouts/ActivateLayoutP/ActivateLayout';
import AuthLayout from './components/authentification/Layouts/AuthLayout/AuthLayout';
import ProfileLayout from './components/authentification/Layouts/ProfileLayout/ProfileLayout';
import ResetLayout from './components/authentification/Layouts/ResetLayout/ResetLayout';
import { AuthContext } from './components/authentification/context/AuthContext';
import { useContext, useEffect } from 'react';
import axios from 'axios';
import Register from './components/authentification/authProfessionel/Register/Register';
import Professionnelp from './components/EspaceProfessionnel.js/sidebarContent/Profile';
import JoinMeeting from './components/VideoCall/Join';
import VideoCall from './components/VideoCall/Meeting';
import EventCalendar from './components/calendar/Calendar';
import Modal from 'react-modal';
import SidebarProfessionnel from './components/EspaceProfessionnel.js/sidebarContent/SidebarContent';
import SidebarClient from './components/EspaceClient.js/sidebarContent/SidebarContent';
import EspaceClient from './components/EspaceClient.js/EspaceClient';
import Deleteevent from './components/calendar/DeleteEventModal';
import ProtectedRoute from './ProtectedRoute';

Modal.setAppElement('#root');
function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { dispatch, token, isLoggedIn } = useContext(AuthContext);
  const [Role, setRole] = useState();
  const [isVerified, setisVerified] = useState();
  const [user, setUser] = useState();

  // get account token
  useEffect(() => {
    const _appSignging = localStorage.getItem('_appSignging');
    if (_appSignging) {
      const getToken = async () => {
        const res = await axios.post('/api/auth/access', null);
        dispatch({ type: 'GET_TOKEN', payload: res.data.ac_token });
      };
      getToken();
    }
    else dispatch({ type: 'SIGNOUT' });
  }, [dispatch, isLoggedIn]);

  // get user data
  useEffect(() => {
    if (token) {
      const getUser = async () => {
        dispatch({ type: 'SIGNING' });
        const res = await axios.get('/api/auth/user', {
          headers: { Authorization: token },
        });
        setUser(res.data);
        dispatch({ type: 'GET_USER', payload: res.data });
        if (res.data.role === 'C') {
          setRole('C');
        } else {
          setRole('P');
        }
        if (res.data.role === 'P' && res.data.isVerified === true) {
          setisVerified(true);
        } else {
          setisVerified(false);
        }
      };
      getUser();
    }
  }, [dispatch, token]);

  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Header isLogged={isLoggedIn} />
      {user && isLoggedIn && Role === 'P' ? (
        <SidebarProfessionnel
          onClose={() => onClose}
          display={{ base: 'none', md: 'block' }}
        />
      ) : user && isLoggedIn && Role === 'C' ? (
        <SidebarClient
          onClose={() => onClose}
          display={{ base: 'none', md: 'block' }}
        />
      ) : (
        ''
      )}

      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route
          path="/professionelProfile"
          element={<ProtectedRoute Component={<Professionnelp />} />}
        />
        <Route path="/" exact element={<Home />} />
        <Route path="/clientProfile" element={<ProtectedRoute Component={<ProfileLayout />} />} />
        <Route
          path="/login"
          element={
            isLoggedIn && Role === 'C' ? (
              <Home />
            ) : isLoggedIn && Role === 'P' ? (
              <EspaceProfessionnel />
            ) : (
              <AuthLayout />
            )
          }
          exact
        />
        <Route path="/registerProfessionnel" exact element={<Register />} />
        <Route
          path="/auth/reset-password/:token"
          element={<ResetLayout />}
          exact
        />
        <Route
          path="/api/auth/activate/:activation_token"
          exact
          element={<ActivateLayout />}
        />
        <Route
          path="/api/auth/activatep/:activation_tokenP"
          exact
          element={<ActivateLayoutP />}
        />
        <Route path="/professionelProfile" element={<ProtectedRoute Component={<Professionnelp />} />} />
        <Route path="/deleteevent" element={<ProtectedRoute Component={<Deleteevent />} />} />
        <Route path="/calendar" element={<ProtectedRoute Component={<EventCalendar />} />} />

        <Route exact path="/joinn" element={<ProtectedRoute Component={<JoinMeeting />} />} />
        <Route exact path="/video/:id" element={<ProtectedRoute Component={<VideoCall />} />} />

        <Route
          path="/service"
          element={<ServiceComponent isLogged={isLoggedIn} User={user} />}
        />
        <Route
          path="/espaceProfessionnel"
          element={<ProtectedRoute Component={<EspaceProfessionnel User={user} />} />}
        />
        <Route path="/espaceClient" element={<ProtectedRoute Component={<EspaceClient User={user} />} />} />
        <Route path="/tousLesServices" element={<AllServices />} />
      </Routes>
      <Footer />
    </ChakraProvider>
  );
}

export default App;
