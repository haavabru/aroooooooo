import {useEffect, useState} from "react";
import "../App.css";

const CountDown = () => {
	const [count, setCount] = useState<number>(0);

	const reload = () => window.location.reload();

	const numberToSecondsString = (number: number): string => {
		const quotient: number = Math.floor(number / 60);
		let remainder: string | number = number % 60;
		if (remainder < 10) {
			remainder = `0${remainder}`;
		}

		if (quotient < 10) {
			return `0${quotient}:${remainder}`;
		}
		return `${quotient}:${remainder}`;
	};

	const backgroundColor = (count: number) => {
		if (count >= 116) {
			return "#973232";
		} else {
			return "#00814b";
		}
	};

	useEffect(() => {
		const timer = setInterval((): void => setCount(count + 1), 1000);
		return () => clearInterval(timer);
	}, [count]);

	return (
		<div
			style={{
				paddingTop: "50px",
				height: "100vh",
				width: "100vw",
				backgroundColor:
					count < 56 ? "#32999a" : backgroundColor(count),
				display: "flex",
				alignItems: "center",
				flexDirection: "column",
				gap: "50px",
			}}
			onClick={() => reload()}
		>
			<img src="https://oldschool.runescape.wiki/images/thumb/Cerberus.png/1200px-Cerberus.png?47f4c"></img>
			<div style={{fontSize: 100}}>
				{numberToSecondsString(count)}
				<br />
				<text style={{fontSize: 18}}>Click anywhere to reset</text>
			</div>
		</div>
	);
};

export default CountDown;
