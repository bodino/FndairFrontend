import { React, useState, useEffect } from 'react';
import {
    PopupBackground,
    PopupContainer,
    ButtonContainer,
    CloseButton,
    ContentContainer,
    LeftContainer,
    IconContainer,
    Description,
    GraphContainer,
    TitleContainer
  } from '../ui/popup'
import { Line } from 'react-chartjs-2';
import { Chart as ChartJs } from 'chart.js/auto';

export default function GraphPopup(props) {
    const [dates, setDates] = useState();
    const [prices, setPrices] = useState();

  

    const data = {
        labels: props.item.graphData.dates,
        datasets:[{
            label: 'test data',
            data: props.item.graphData.prices,
            fill: {
                target: 'origin',
                above: 'rgb(0, 80, 124, 0.20)'
            },
            borderColor: 'rgb(0, 80, 124)',
            tension: 0.1
        }]
    }

    var options = {
        responsive: true,
        scales: {
            y: {
                ticks: {
                    // Include a dollar sign in the ticks
                    callback: function(value, index, ticks) {
                        return '$' + value;
                    }
                }
            }
        },
        elements: {
            point: {
                radius: 0
            }
        },
        plugins: {
            legend: {
                display: false
            }
        }
    }
    return (props.trigger) ? (
        <PopupBackground>
            <PopupContainer>
                <ButtonContainer>
                    <CloseButton onClick={()=>{props.setTrigger(false)}}>X</CloseButton>
                </ButtonContainer>
                <ContentContainer>
                    <LeftContainer>
                        <TitleContainer>
                            <h3 style={{color: 'black', textAlign: 'center'}}>{props.name}</h3>
                        </TitleContainer>
                        
                        <IconContainer>
                            <img style={{width:"120px", borderRadius:"50%"}} src={props.icon}/>
                        </IconContainer>
                        <Description>{props.description}</Description>
                    </LeftContainer>
                    <GraphContainer>
                        <Line data={data} options={options} style={{maxHeight: "100%", maxWidth: "95%"}}/>
                    </GraphContainer>
                </ContentContainer>
            </PopupContainer>
        </PopupBackground>
    ) : "";
}
