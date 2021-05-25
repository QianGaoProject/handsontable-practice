import React from 'react'
import { SVGProps } from './type'

export const SortDown: React.FC<SVGProps> = (props) => {
    return (
        <svg
            width={props.width}
            height={props.height}
            style={props.style}
            className={props.className}
            viewBox={"0 0 320 512"}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d={"M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41z"}
                fill={props.fill} />
        </svg>
    )
}

export const SortUp: React.FC<SVGProps> = (props) => {
    return (
        <svg
            width={props.width}
            height={props.height}
            style={props.style}
            className={props.className}
            viewBox={"0 0 320 512"}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d={"M279 224H41c-21.4 0-32.1-25.9-17-41L143 64c9.4-9.4 24.6-9.4 33.9 0l119 119c15.2 15.1 4.5 41-16.9 41z"}
                fill={props.fill} />
        </svg>
    )
}

export const TimesSquare: React.FC<SVGProps> = (props) => {
    return (
        <svg
            width={props.width}
            height={props.height}
            style={props.style}
            className={props.className}
            viewBox={"0 0 448 512"}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d={"M325.8 193.8L263.6 256l62.2 62.2c4.7 4.7 4.7 12.3 0 17l-22.6 22.6c-4.7 4.7-12.3 4.7-17 0L224 295.6l-62.2 62.2c-4.7 4.7-12.3 4.7-17 0l-22.6-22.6c-4.7-4.7-4.7-12.3 0-17l62.2-62.2-62.2-62.2c-4.7-4.7-4.7-12.3 0-17l22.6-22.6c4.7-4.7 12.3-4.7 17 0l62.2 62.2 62.2-62.2c4.7-4.7 12.3-4.7 17 0l22.6 22.6c4.7 4.7 4.7 12.3 0 17zM448 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zm-48 346V86c0-3.3-2.7-6-6-6H54c-3.3 0-6 2.7-6 6v340c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"}
                fill={props.fill} />
        </svg>
    )
}

export const Search: React.FC<SVGProps> = (props) => {
    return (
        <svg
            width={props.width}
            height={props.height}
            style={props.style}
            className={props.className}
            viewBox={"0 0 512 512"}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d={"M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z"}
                fill={props.fill} />
        </svg>
    )
}