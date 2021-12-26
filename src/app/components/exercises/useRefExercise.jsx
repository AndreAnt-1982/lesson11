import React, { useRef, useState, useEffect } from "react";
import CollapseWrapper from "../common/collapse";
import Divider from "./../common/divider";

const UseRefExercise = () => {
    const textRef = useRef("bloc");
    const sizeRef = useRef();
    const [otherState, setOtherState] = useState(0);
    const handleClickSize = () => {
        sizeRef.current.style.width = "80px";
        sizeRef.current.style.height = "150px";
        setOtherState(!otherState);
    };
    useEffect(() => {
        textRef.current = "text";
    });

    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть блок, у которого заданы ширина и высота. Добавьте
                кнопку, при нажатии которой изменятся следующие свойства:
            </p>
            <ul>
                <li>Изменится содежимое блока на &quot;text&quot;</li>
                <li>высота и ширина станут равны 150 и 80 соответственно</li>
            </ul>
            <div
                ref={sizeRef}
                className="bg-primary d-flex flex-row justify-content-center align-items-center rounded"
                style={{
                    height: 40,
                    width: 60,
                    color: "white"
                }}
            >
                <small>{textRef.current}</small>
            </div>
            <Divider />

            <button className="btn btn-danger" onClick={handleClickSize}>
                HomeTaskButton
            </button>
        </CollapseWrapper>
    );
};

export default UseRefExercise;
