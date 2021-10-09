import { useEffect, useState } from 'react';
import { FormControlLabel, Paper, Radio, RadioGroup } from '@material-ui/core';
import { Appointments, DayView, MonthView, Scheduler, Toolbar, ViewSwitcher, WeekView, DateNavigator } from '@devexpress/dx-react-scheduler-material-ui';
import { ViewState } from '@devexpress/dx-react-scheduler';
import app_config from '../config';

const Schedular = () => {

  const [appointments, setAppointments] = useState([]);
  const url = app_config.api_url;

  const [currentApp, setCurrentApp] = useState({
    data: appointments,
    currentDate: '2018-06-27',
    currentViewName: 'work-week'
  })

  const { currentViewName } = currentApp;

  const currentViewNameChange = (currentViewName) => {
    setCurrentApp({ currentViewName });
  };

  const fetchAppointments = () => {
    fetch(url + 'task/getall')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setAppointments(data);
      })

  }

  useEffect(() => {
    fetchAppointments();
  }, [])

  const ExternalViewSwitcher = ({
    currentViewName,
    onChange,
  }) => (
    <RadioGroup
      aria-label="Views"
      style={{ flexDirection: 'row' }}
      name="views"
      value={currentViewName}
      onChange={onChange}
    >
      <FormControlLabel value="Week" control={<Radio />} label="Week" />
      <FormControlLabel value="Work Week" control={<Radio />} label="Work Week" />
      <FormControlLabel value="Month" control={<Radio />} label="Month" />
    </RadioGroup>
  );

  const commitChanges = ({ added, changed, deleted }) => {


    if (added) {
      const startingAddedId = data.length > 0 ? data[data.length - 1].id + 1 : 0;
      data = [...data, { id: startingAddedId, ...added }];

      setCurrentApp({
        data: appointments,
        currentDate: '2018-06-27',
      });

    }
    // console.log('here');
    // console.log(currentApp);
    return;
    setCurrentApp((state) => {
      let { data } = state;
      if (added) {

      }
      if (changed) {
        data = data.map(appointment => (
          changed[appointment.id] ? { ...appointment, ...changed[appointment.id] } : appointment));
      }
      if (deleted !== undefined) {
        data = data.filter(appointment => appointment.id !== deleted);
      }
      return { data };
    });
  }

  let { data } = currentApp;

  return (
    <div className="col-md-10 mx-auto mt-5">
      <Paper>
        <Scheduler
          data={data}
          height={700}
        >
          <ViewState
            defaultCurrentDate="2021-10-09"
            currentViewName={currentViewName}
            onCurrentViewNameChange={currentViewNameChange}
          />

          <WeekView
            startDayHour={10}
            endDayHour={19}
          />
          <WeekView
            name="work-week"
            displayName="Work Week"
            excludedDays={[0, 6]}
            startDayHour={9}
            endDayHour={19}
          />
          <MonthView />
          <DayView />

          <Toolbar />
          <DateNavigator />
          <ViewSwitcher />
          <Appointments />
        </Scheduler>
      </Paper>
    </div>

  )
}
export default Schedular;
