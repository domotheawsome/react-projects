import React from 'react';
import { jsx } from '@emotion/react';
import styled from '@emotion/styled';

const CardWrapper = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 10px;
  padding: 20px;
  min-width: 500px;
  width: auto;
  max-width: 750px;
`;

const CardHeader = styled.div`
  border-bottom: 1px solid #ddd;
  margin-bottom: 10px;
  padding-bottom: 10px;
`;

const CardTitle = styled.h3`
  font-size: 24px;
  margin: 0;
`;

const CardText = styled.p`
  font-size: 16px;
  margin-left: 10px;
`;

const CardContent = styled.div`
  display: flex;
  align-items: center;
`;

const CardLeft = styled.div`
  display: flex;
  margin-left: auto;
`;

export default function Card({ repos }) {
  // Group the forecast data by day
  const days = repos.reduce((acc, repo) => {
    const date = repo.dt_txt.split(' ')[0];
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(repo);
    return acc;
  }, {});

  return (
    <>
      {Object.keys(days).map((day) => (
        <CardWrapper key={day}>
          <CardHeader>
            <CardTitle>{new Date(day).toLocaleString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</CardTitle>
          </CardHeader>
          {days[day].map((repo) => (
            <div key={repo.dt}>
              <div className='Card-body'>
                <CardContent>
                  {repo.main && (
                    <CardText>
                      <span style={{ fontWeight: 'bold', fontSize: '20px' }}>{Math.round((repo.main.temp_max - 273.15) * 1.8 + 32)}&deg;</span>{' '}/{' '}
                      {Math.round((repo.main.temp_min - 273.15) * 1.8 + 32)}&deg;
                    </CardText>
                  )} 
                  {repo.weather && (
                    <>
                      <CardText>
                        <img width={75} height={75} src={`http://openweathermap.org/img/w/${repo.weather[0].icon}.png`} alt={repo.weather[0].description} />
                        {repo.weather[0].main}
                      </CardText>
                    </>
                  )}
                  <CardLeft>
                    {repo.main && (
                      <CardText>
                        <img height={30} src={process.env.PUBLIC_URL + '/humidity.png'} alt='Humidity Icon' /> {repo.main.humidity}%
                      </CardText>
                    )}
                    <CardText></CardText>
                    {repo.wind && (
                      <CardText>
                        <img height={30} src={process.env.PUBLIC_URL + '/wind.png'} alt='Wind Icon' /> {repo.wind.speed} mph
                      </CardText>
                    )}
                  </CardLeft>
                </CardContent>
              </div>
            </div>
          ))}
        </CardWrapper>
      ))}
    </>
  );
}
