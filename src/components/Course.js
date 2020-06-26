/**
 * Компонент показывает курсы валют
 */
import React from 'react';

export default function Course() {
  return (
    <>
      <a href='#0'>USD</a>
      <span className='course-value'>69,11</span>
      <span className='course-change'>+0,25</span>
      <a href='#0'>EUR</a>
      <span className='course-value'>77,54</span>
      <span className='course-change'>-0,30</span>
      <a href='#0'>Нефть</a>
      <span className='course-value'>41,21</span>
      <span className='course-change'>-3,17%</span>
    </>
  );
}