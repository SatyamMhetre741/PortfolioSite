"use client";
import { forwardRef, useImperativeHandle, useRef, useState } from "react";

const ZoomTransition = forwardRef(function ZoomTransition(
	{ baseSize = 64, color = "#000", expandDuration = 550, fadeDuration = 280, zIndex = 9999 },
	ref
) {
	const elRef = useRef(null);
	const [s, setS] = useState({ v: false, x: 0, y: 0, k: 0, o: 1 });

	function coverScale(x, y) {
		const W = innerWidth, H = innerHeight;
		const c = [[0,0],[W,0],[0,H],[W,H]];
		let m = 0; for (const [cx,cy] of c) m = Math.max(m, Math.hypot(cx-x, cy-y));
		return Math.max(1, (m*2)/baseSize + 0.2);
	}

	useImperativeHandle(ref, () => ({
		async start(origin, onCovered) {
			const { x, y } = origin; const k = coverScale(x, y);
			setS({ v: true, x, y, k: 0.05, o: 1 });
			await new Promise(r => requestAnimationFrame(r));
			const el = elRef.current; if (!el) return;
			el.style.transition = `transform ${expandDuration}ms cubic-bezier(.22,.8,.2,1)`;
			setS(s0 => ({ ...s0, k }));
			await new Promise(r => setTimeout(r, expandDuration + 20));
			if (onCovered) await onCovered();
			el.style.transition = `opacity ${fadeDuration}ms ease`;
			setS(s0 => ({ ...s0, o: 0 }));
			await new Promise(r => setTimeout(r, fadeDuration + 20));
			setS({ v: false, x: 0, y: 0, k: 0, o: 1 });
		}
	}));

	if (!s.v) return null;
	return (
		<div ref={elRef} style={{
			position:'fixed', left:s.x, top:s.y, width:baseSize, height:baseSize,
			transform:`translate(-50%,-50%) scale(${s.k})`, transformOrigin:'center', borderRadius:9999,
			background:color, opacity:s.o, zIndex, pointerEvents:'none', willChange:'transform,opacity'
		}} />
	);
});

export default ZoomTransition;

