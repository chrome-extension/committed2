// external dependencies
import React from 'react';
import Sidebar from "react-sidebar";
// components
import { GlobalStyle } from './App.style';
import SideMenu from './containers/SideMenu';
import ItemsContainer from './containers/ItemsContainer';
import { SettingsIcon } from './components/Icons';
import Clock from './components/Clock';
import CalendarModal from './components/CalendarModal';
// react contexts
import { withContext } from './contexts';

const App = ({
  sidebarOpen, setSidebarOpen,
  calendarModalOpen, setCalendarModalOpen, setTodoDueDate,
  theme
}) => (
    <Sidebar
      sidebar={<SideMenu open={sidebarOpen} />}
      open={sidebarOpen}
      onSetOpen={setSidebarOpen}
    >

      <div className="App">

        <GlobalStyle backgroundColor={theme.background} />

        <SettingsIcon
          defaultIconColor={theme.icon.default}
          hoverIconColor={theme.icon.hover}
          onClick={() => setSidebarOpen(true)}
        />

        {/* Modals */}
        <CalendarModal
          overlayColor='rgba(0,0,0,0.7)'
          buttonColor={theme.secondary}
          fontColor={theme.background}
          isOpen={calendarModalOpen}
          onDayClick={setTodoDueDate}
          handleCloseModal={() => setCalendarModalOpen(false)}
        />

        {/* Main app */}
        <Clock/>
        <ItemsContainer />

      </div>

    </Sidebar>
  )

export default withContext(App);
