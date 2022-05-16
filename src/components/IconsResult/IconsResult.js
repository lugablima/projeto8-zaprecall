export default function IconsResult({ icons }) {
  return <>{icons.length !== 0 ? <div className="icons-result">{icons}</div> : <></>}</>;
}
