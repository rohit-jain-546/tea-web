import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BrewingRitual } from "@/components/brewing-ritual";
import { DetailSections } from "@/components/detail-sections";
import { Navbar } from "@/components/navbar";
import { ProductHero } from "@/components/product-hero";
import { RelatedProducts } from "@/components/related-products";
import { SiteFooter } from "@/components/site-footer";
import { teaProducts } from "@/data/products";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = teaProducts.find((item) => item.slug === slug);

  if (!product) {
    return {
      title: "Tea Not Found | Aurelia Tea",
    };
  }

  return {
    title: `${product.name} | Aurelia Tea`,
    description: product.shortDescription,
  };
}

export function generateStaticParams() {
  return teaProducts.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = teaProducts.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col overflow-x-clip">
      <Navbar />
      <main>
        <ProductHero product={product} />
        <DetailSections product={product} />
        <BrewingRitual />
        <RelatedProducts currentSlug={product.slug} products={teaProducts} />
      </main>
      <SiteFooter />
    </div>
  );
}
