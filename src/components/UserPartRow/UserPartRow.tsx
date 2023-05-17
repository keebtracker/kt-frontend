import classNames from "classnames";
import { useState, useEffect, useRef } from "react";
import "./UserPartRow.css";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

function UserPartRow(props: any) {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const { userPart } = props;
  const listRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const listElement = listRef.current;
    if (listElement) {
      const hasOverflow = listElement.scrollWidth > listElement.clientWidth;
      listElement.classList.toggle("scrollable", hasOverflow);
    }
  }, [userPart.buildIdList, isCollapsed]);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const buildList = userPart.buildIdList.map((item: any) => item.name).join(", ");

  return (
    <tr className="bg-gray-200 rounded shadow">
      <td className="align-top py-2 shadow">{userPart.name}</td>
      <td className="px-4 py-2 shadow text-center">
        <div className="flex items-center justify-center">
          <span
            className={classNames("list-none m-0 w-96 text-center overflow-hidden", {
              "scrollable": buildList.length > 0
            })}
            ref={listRef}
          >
            {<span className="scrolling-text">{buildList}</span>}
          </span>
        </div>
      </td>
      <td className="align-top py-2 shadow">{userPart.datePurchased.substring(0, 10)}</td>
      <td className="align-top py-2 shadow">
        {"$" + userPart.purchasedPrice.$numberDecimal}
      </td>
      <td className="align-top py-2 shadow">{userPart.purchasedFrom}</td>
    </tr>
  );
}

export default UserPartRow;