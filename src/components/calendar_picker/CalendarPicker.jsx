import React, { useState } from "react";
import {
  StyledWrapper,
  StyledApp,
  StyledDateChooser,
  StyledDateChooserButton,
  StyledCalendar,
  StyledCalendarDay,
} from "./StyledComponents";

const CalendarPicker = () => {
  const calendarDates = Array(31)
    .fill(0)
    .map((e, i) => i);

  const [choosingType, setChoosingType] = useState("start");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [hoverDate, setHoverDate] = useState(null);

  const updateDate = (chosenDay) => {
    // handle if a user chose before our current range
    if (startDate && chosenDay < startDate) {
      setStartDate(chosenDay);
      return setChoosingType("end");
    }

    // handle if a user chose after our current range
    if (endDate && chosenDay > endDate) {
      setEndDate(chosenDay);
      return setChoosingType("end");
    }

    //
    if (choosingType === "start") {
      setStartDate(chosenDay);
      return setChoosingType("end");
    }

    //
    if (choosingType === "end") {
      setEndDate(chosenDay);
    }
  };

  const checkInBetween = (day) => {
    if (startDate && !endDate) return day > startDate && day < hoverDate;

    return day > startDate && day < endDate;
  };

  return (
    <StyledWrapper>
      <StyledApp>
        <StyledDateChooser>
          <StyledDateChooserButton
            onClick={() => setChoosingType("start")}
            isChoosing={choosingType === "start"}
          >
            Start Date <span>{startDate}</span>
          </StyledDateChooserButton>
          <StyledDateChooserButton
            onClick={() => setChoosingType("end")}
            isChoosing={choosingType === "end"}
          >
            End Date <span>{endDate}</span>
          </StyledDateChooserButton>
        </StyledDateChooser>

        <StyledCalendar>
          {calendarDates.map((day, index) => {
            const dayNumber = day + 1;

            let isInBetween = checkInBetween(dayNumber);
            let isSelected = dayNumber === startDate || dayNumber === endDate;

            return (
              <StyledCalendarDay
                key={index}
                isInBetween={isInBetween}
                isSelected={isSelected}
                onClick={() => updateDate(dayNumber)}
                onMouseOver={() => setHoverDate(dayNumber)}
              >
                {dayNumber}
              </StyledCalendarDay>
            );
          })}
        </StyledCalendar>
      </StyledApp>
    </StyledWrapper>
  );
};

export default CalendarPicker;
