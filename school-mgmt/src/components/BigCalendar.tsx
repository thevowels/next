'use client'

import { Calendar, momentLocalizer, View, Views } from 'react-big-calendar'
import moment from 'moment'
import { calendarEvents } from '@/lib/data'
import { useState } from 'react'

const localizer = momentLocalizer(moment)

export default function BigCalendar(){
	const [view, setView] = useState<View>(Views.DAY);
	const handleOnChangeView = (selectedView: View) => {
		setView(selectedView);
	}
	return (
		<div>
		<Calendar
		  localizer={localizer}
		  events={calendarEvents}
		  startAccessor="start"
		  endAccessor="end"
		  views={["work_week", "day"]}
		  view={view}
		  onView={handleOnChangeView}
		  style={{ height: "98%" }}
		  min={new Date(2026,3,4,8,0)}
		  max = {new Date(2026,3,4,22,0)}
		/>
	  </div>	
	)	
}
