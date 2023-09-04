import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import ProductList from "@/components/product-list";
import Billboard from "@/components/ui/billboard";
import Container from "@/components/ui/container";

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
          <div style={{ backgroundImage: `url(https://play-images-prod-ctf.tech.tvnz.co.nz/api/v1/web/image/3CLEzO37tocxCoSmzzcxwx/2733ae58689b3e59e477a86d2da48a36/friends-showtile.png.2733ae58689b3e59e477a86d2da48a36.jpg?width=1200&height=630)` }} className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover">
            <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  )
};

export default HomePage;
