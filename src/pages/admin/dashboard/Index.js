import React from 'react'
import { Calendar, Badge } from 'antd';

function getListData(value) {
  let listData;
  switch (value.date()) {
    case 8:
      listData = [
        { type: 'warning', content: 'Egg, Milk, Bread' },
        { type: 'success', content: 'Steak, Potatos' },
        { type: 'error', content: 'Pork, Banana, Salat' },
      ];
      break;
    case 9:
      listData = [
        { type: 'warning', content: 'Egg, Milk, Bread' },
        { type: 'success', content: 'Steak, Potatos' },
        { type: 'error', content: 'Pork, Banana, Salat' },
      ];
      break;
    case 10:
      listData = [
        { type: 'warning', content: 'Croissants, Yoghourt' },
        { type: 'success', content: 'Lamb, rice, orange' },
        { type: 'error', content: 'Cabbage, Pizza' },
      ];
      break;
    case 11:
      listData = [
        { type: 'warning', content: 'Croissants, Yoghourt' },
        { type: 'success', content: 'Lamb, rice, orange' },
        { type: 'error', content: 'Cabbage, Pizza' },
      ];
      break;
    case 12:
      listData = [
          { type: 'warning', content: 'Croissants, Yoghourt' },
          { type: 'success', content: 'Lamb, rice, orange' },
          { type: 'error', content: 'Cabbage, Pizza' },
        ];
        break;
    case 13:
      listData = [
          { type: 'warning', content: 'Croissants, Yoghourt' },
          { type: 'success', content: 'Lamb, rice, orange' },
          { type: 'error', content: 'Cabbage, Pizza' },
        ];
        break;
    case 14:
      listData = [
          { type: 'warning', content: 'Croissants, Yoghourt' },
          { type: 'success', content: 'Lamb, rice, orange' },
          { type: 'error', content: 'Cabbage, Pizza' },
        ];
        break;
    case 15:
      listData = [
        { type: 'warning', content: 'Cake' },
        { type: 'success', content: 'Fried pork chop' },
        { type: 'error', content: 'French fries' },
      ];
      break;
    default:
  }
  return listData || [];
}

function dateCellRender(value) {
  const listData = getListData(value);
  return (
    <ul className="events">
      {listData.map(item => (
        <li key={item.content}>
          <Badge status={item.type} text={item.content} />
        </li>
      ))}
    </ul>
  );
}

function getMonthData(value) {
  if (value.month() === 8) {
    return 1394;
  }
}

function monthCellRender(value) {
  const num = getMonthData(value);
  return num ? (
    <div className="notes-month">
      <section>{num}</section>
      <span>Backlog number</span>
    </div>
  ) : null;
}

function Index() {
  return (
    <div>
      <Calendar dateCellRender={dateCellRender} monthCellRender={monthCellRender} />,
    </div>
  )
}

export default Index
