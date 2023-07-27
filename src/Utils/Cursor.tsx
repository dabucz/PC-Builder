import React, { useState, useEffect } from 'react';
import '../css/cursor.css'
interface CursorProps {
    enabled: boolean;
}
  
const Cursor: React.FC<CursorProps> = ({ enabled }) => {
    const [onElement, setOnElement] = useState<Element | null>(null);

    const updateProperties = (elem: HTMLElement, state: any) => {
        elem.style.setProperty('--x', `${state.x}px`);
        elem.style.setProperty('--y', `${state.y}px`);
        elem.style.setProperty('--width', `${state.width}px`);
        elem.style.setProperty('--height', `${state.height}px`);
        elem.style.setProperty('--radius', state.radius);
        elem.style.setProperty('--scale', state.scale);
    };

    const createState = (e: MouseEvent): any => {
        const defaultState = {
        x: e.clientX,
        y: e.clientY,
        width: 60,
        height: 60,
        radius: '50%',
        scale: 1,
        };

        const computedState: any = {};

        if (onElement != null) {
        const { top, left, width, height } = onElement.getBoundingClientRect();
        const radius = window.getComputedStyle(onElement).borderTopLeftRadius;

        computedState.x = left + width / 2;
        computedState.y = top + height / 2;
        computedState.width = width;
        computedState.height = height;
        computedState.radius = radius;    }

        return {
        ...defaultState,
        ...computedState,
        };
    };

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (cursorRef.current) {
                const state = createState(e);
                updateProperties(cursorRef.current, state);
            }
        };
        const btnElements = document.querySelectorAll('.btn');
        btnElements.forEach((elem) => {
            elem.addEventListener('mouseenter', () => handleElementEnter(elem));
            elem.addEventListener('mouseleave', handleElementLeave);
        });
        document.addEventListener('mousemove', handleMouseMove);
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, [onElement]);

    const cursorRef = React.useRef<HTMLDivElement>(null);

    const handleElementEnter = (elem: Element) => {
        setOnElement(elem);
    };

    const handleElementLeave = () => {
        setOnElement(null);
    };
    if (!enabled) { 
        return (
            <>
            <style>
            {`
            .btn {
                cursor: pointer; 
            }
            `}
            </style>
            </>
        ) 
    }
    return (
        <>
        <div className="cursor" ref={cursorRef}></div>
        <style>
        {`
            html {
                cursor: url("data:image/svg+xml,%3Csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='9' x2='9' y2='18' stroke='%2300CCE7' stroke-width='2'/%3E%3Cline y1='9' x2='18' y2='9' stroke='%2300CCE7' stroke-width='2'/%3E%3C/svg%3E") 9 9, auto; 
            }
        `}
        </style>
        </>
    );
};

export default Cursor;
