// SeatMap.jsx
// Reception floor plan (tables only) with a glowing highlight on the active table.
// Usage: <SeatMap activeTable={selectedGuest?.table} />
// `activeTable` must match a `table` value from GUEST_LIST ("VIP 1", "Table 7", ...).

const ROUND_R = 26;

// Coordinates traced from the venue layout (viewBox space).
const TABLES = [
  // Long tables (VIP) — angled toward the dance floor
  { id: "VIP 2", type: "long", x: 577, y: 243, w: 42, h: 150, rotate: 27, label: "VIP 2" },
  { id: "VIP 1", type: "long", x: 772, y: 240, w: 42, h: 150, rotate: -27, label: "VIP 1" },

  // Left side
  { id: "Table 6", type: "round", x: 498, y: 186, label: "6" },
  { id: "Table 7", type: "round", x: 466, y: 267, label: "7" },
  { id: "Table 8", type: "round", x: 434, y: 349, label: "8" },
  { id: "Table 9", type: "round", x: 537, y: 364, label: "9" },
  { id: "Table 10", type: "round", x: 524, y: 459, label: "10" },

  // Right side
  { id: "Table 1", type: "round", x: 843, y: 186, label: "1" },
  { id: "Table 2", type: "round", x: 877, y: 251, label: "2" },
  { id: "Table 3", type: "round", x: 906, y: 348, label: "3" },
  { id: "Table 4", type: "round", x: 783, y: 364, label: "4" },
  { id: "Table 5", type: "round", x: 841, y: 413, label: "5" },
];

const COLORS = {
  tableFill: "#FBF6EA",
  tableStroke: "#E3C888",
  tableText: "#8A6A2B",
  activeFill: "#F3D58A",
  activeStroke: "#C9922E",
  activeText: "#4A3410",
  landmark: "#F1ECE0",
  landmarkStroke: "#D9D2C0",
  landmarkText: "#A79F8A",
  glow: "rgba(224, 168, 56, 0.95)",
};

function TableShape({ table, active, dimmed }) {
  const fill = active ? COLORS.activeFill : COLORS.tableFill;
  const stroke = active ? COLORS.activeStroke : COLORS.tableStroke;
  const textColor = active ? COLORS.activeText : COLORS.tableText;
  const isLong = table.type === "long";

  return (
    <g
      className={`seatmap-table${active ? " seatmap-active" : ""}`}
      style={{ opacity: dimmed ? 0.45 : 1 }}
      aria-label={table.id}
    >
      {/* Expanding ring — only on the active table */}
      {active &&
        (isLong ? (
          <rect
            className="seatmap-ring"
            x={table.x - table.w / 2}
            y={table.y - table.h / 2}
            width={table.w}
            height={table.h}
            rx={6}
            transform={`rotate(${table.rotate} ${table.x} ${table.y})`}
            fill="none"
            stroke={COLORS.activeStroke}
            strokeWidth={2}
          />
        ) : (
          <circle
            className="seatmap-ring"
            cx={table.x}
            cy={table.y}
            r={ROUND_R}
            fill="none"
            stroke={COLORS.activeStroke}
            strokeWidth={2}
          />
        ))}

      {isLong ? (
        <rect
          x={table.x - table.w / 2}
          y={table.y - table.h / 2}
          width={table.w}
          height={table.h}
          rx={6}
          transform={`rotate(${table.rotate} ${table.x} ${table.y})`}
          fill={fill}
          stroke={stroke}
          strokeWidth={active ? 2.5 : 1.5}
          style={{ transition: "fill 300ms, stroke 300ms" }}
        />
      ) : (
        <circle
          cx={table.x}
          cy={table.y}
          r={ROUND_R}
          fill={fill}
          stroke={stroke}
          strokeWidth={active ? 2.5 : 1.5}
          style={{ transition: "fill 300ms, stroke 300ms" }}
        />
      )}

      <text
        x={table.x}
        y={table.y}
        textAnchor="middle"
        dominantBaseline="central"
        fill={textColor}
        fontSize={isLong ? 15 : 18}
        fontWeight={active ? 700 : 600}
        fontFamily="inherit"
      >
        {table.label}
      </text>
    </g>
  );
}

export default function SeatMap({ activeTable = null, className = "" }) {
  const hasActive = Boolean(activeTable);
  const active = TABLES.find((t) => t.id === activeTable);

  return (
    <figure className={className}>
      <style>{`
        @keyframes seatmap-glow {
          0%, 100% { filter: drop-shadow(0 0 4px ${COLORS.glow}) drop-shadow(0 0 10px ${COLORS.glow}); }
          50%      { filter: drop-shadow(0 0 10px ${COLORS.glow}) drop-shadow(0 0 26px ${COLORS.glow}); }
        }
        @keyframes seatmap-ring {
          0%   { opacity: 0.8; transform: scale(1); }
          100% { opacity: 0;   transform: scale(1.7); }
        }
        .seatmap-table { transition: opacity 300ms; }
        .seatmap-active { animation: seatmap-glow 2s ease-in-out infinite; }
        .seatmap-ring {
          transform-box: fill-box;
          transform-origin: center;
          animation: seatmap-ring 2s ease-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .seatmap-active { animation: none; filter: drop-shadow(0 0 10px ${COLORS.glow}); }
          .seatmap-ring { animation: none; opacity: 0; }
        }
      `}</style>

      <svg
        viewBox="390 40 560 460"
        className="w-full h-auto"
        role="img"
        aria-label={
          active
            ? `Reception floor plan. Your table, ${active.id}, is highlighted.`
            : "Reception floor plan showing all tables."
        }
      >
        {/* Landmarks for orientation (kept quiet so tables stand out) */}
        <rect
          x={570}
          y={48}
          width={205}
          height={58}
          rx={4}
          fill={COLORS.landmark}
          stroke={COLORS.landmarkStroke}
        />
        <text
          x={672}
          y={78}
          textAnchor="middle"
          dominantBaseline="central"
          fontSize={13}
          letterSpacing={2}
          fill={COLORS.landmarkText}
        >
          STAGE
        </text>

        <ellipse
          cx={677}
          cy={194}
          rx={46}
          ry={36}
          fill="none"
          stroke={COLORS.landmarkStroke}
          strokeDasharray="4 4"
        />
        <text
          x={677}
          y={194}
          textAnchor="middle"
          dominantBaseline="central"
          fontSize={11}
          letterSpacing={1}
          fill={COLORS.landmarkText}
        >
          DANCE FLOOR
        </text>

        {/* Draw inactive tables first, active last so its glow sits on top */}
        {TABLES.filter((t) => t.id !== activeTable).map((t) => (
          <TableShape key={t.id} table={t} active={false} dimmed={hasActive} />
        ))}
        {active && <TableShape key={active.id} table={active} active dimmed={false} />}
      </svg>
    </figure>
  );
}