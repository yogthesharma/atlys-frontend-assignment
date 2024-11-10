export interface RadioInputPropTypes {
  id: string;
}

export const RadioInput = (props: RadioInputPropTypes) => {
  const { id } = props
  return (
    <div
      id={id}
      className="rounded-full w-3 aspect-square right-0 border-gray-300 border-2 cursor-pointer"
    >
      <div className="rounded-full w-2.5 h-2.5 bg-radio-main  border-2 cursor-pointer mx-auto" />
    </div>
  );
};
