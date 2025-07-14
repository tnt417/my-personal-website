import ImageBlogButton from "@/components/ImageBlogButton";

// pages/index.js
export default function Blog() {

  return (
    <div className="w-[500px] m-auto">
      <ImageBlogButton
            key={0}
            src={'/images/enemy_stress_test.gif'}
            alt={'Knightward'}
            href="/blog/knightward"
            destName={"Developing Knightward"}
            />
      <br/>
      <ImageBlogButton
            key={0}
            src={'/images/application_spreadsheet.png'}
            alt={'Knightward'}
            href="/blog/knightward"
            destName={"2024 Application Season"}
            />
    </div>
  );
}