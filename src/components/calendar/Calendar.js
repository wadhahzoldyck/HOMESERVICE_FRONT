import React, { useContext, useEffect, useRef, useState } from 'react';
import FullCalendar from '@fullcalendar/react'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import AddEventModal from './AddEventModal';
import axios from 'axios';
import moment from 'moment';
import { Button } from '@chakra-ui/react';
import { AuthContext } from '../authentification/context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Calendar = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [events, setEvents] = useState([]);
  const calendarRef = useRef(null);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const onEventAdded = event => {
    let calendarApi = calendarRef.current.getApi();
    calendarApi.addEvent({
      start: moment(event.start).toDate(),
      end: moment(event.end).toDate(),
      title: event.title,
    });
  };

  async function handleEventAdd(data) {
    await axios.post(`/create-event/${user._id}`, data.event);
  }

  async function handleDatesSet() {
    console.log(user._id);
    const res = await axios.get(`/get-event/${user._id}`);
    setEvents(res.data);
  }

  useEffect(() => {
    handleDatesSet();
  }, [user]);

  const nav = () => {
    navigate('/deleteevent');
  };

  return (
    <section>
      <Button
      position="static"
        onClick={() => setModalOpen(true)}
        px={4}
        fontSize={'sm'}
        rounded={'md'}
        bg={'blue.400'}
        color={'white'}
        boxShadow={
          '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
        }
        marginLeft={500}
      >
        Ajouter un évènement
      </Button>

      <Button
        onClick={nav}
        position="static"
        marginLeft={10}
        marginTop={0}
        /* flex={1} */
        px={4}
        fontSize={'sm'}
        rounded={'md'}
        bg={'blue.400'}
        color={'white'}
        boxShadow={
          '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
        }
      >
        Supprimer un évènement
      </Button>
      <div style={{ position: 'relative', zIndex: 0 }}>
        <FullCalendar
          ref={calendarRef}
          events={events}
          onClick={onEventAdded}
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          eventAdd={event => handleEventAdd(event)}
          datesSet={() => {
            handleDatesSet();
          }}
        />
      </div>

      <AddEventModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onEventAdded={event => onEventAdded(event)}
      />
    </section>
  );
};

export default Calendar;
