'use client';
type Props = {};
function Action(props: Props) {
  return (
    <span>
      <button onClick={() => alert('Trigger button')}>Add Scorm</button>
    </span>
  );
}

export default Action;
