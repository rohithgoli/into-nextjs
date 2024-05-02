import Link from "next/link";

export default function Products() {
  return (
    <ul>
      <li>
        <Link href="/products/comb">Comb</Link>
      </li>
      <li>
        <Link href="/products/hairOil">Hair Oil</Link>
      </li>
      <li>
        <Link href="/products/facePowder">Face Powder</Link>
      </li>
    </ul>
  );
}
