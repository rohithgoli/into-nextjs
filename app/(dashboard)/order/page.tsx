import Link from "next/link";

export default function Order() {
  return (
    <>
      <h1>Orders</h1>
      <ul>
        <li>
          <Link href="/order/123">123</Link>
        </li>
        <li>
          <Link href="/order/456">456</Link>
        </li>
        <li>
          <Link href="/order/789">789</Link>
        </li>
      </ul>
    </>
  );
}
