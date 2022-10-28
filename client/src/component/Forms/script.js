import { arr } from "../Data/Data";

// format phone number
export const formatPhone = (value) => {
  if (!value) return value;
  const phoneN = value.replace(/[^\d]/g, "");
  const phoneNlen = phoneN.length;

  if (phoneNlen < 4) return phoneN;
  if (phoneNlen < 16) {
    return `(+${phoneN.slice(0, 3)}) ${phoneN.slice(3, 14)}`;
  }
};

export const jambYears = arr.map((item, i) => {
  return (
    <option key={i} value={item}>
      {item}
    </option>
  );
});

// generate random id
export const guid = () => {
  let rand = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  };

  // format string
  return rand() + rand() + "-" + rand() + "-" + rand();
};
