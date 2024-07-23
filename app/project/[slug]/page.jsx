import Link from "next/link";
import React from "react";

export default function page({ params }) {
  return (
    <article>
      <div className="relative mt-5 mb-14">
        <img
          src="https://images.unsplash.com/photo-1717501218325-ff260b4f4b01?q=800&w=425&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          // src="https://picsum.photos/1000"
          alt={params.slug}
          className="aspect-video w-full rounded-md border"
        />
        <div className="bg-accent border rounded-lg px-5 py-2 w-[calc(100%-20px)] absolute translate-y-1/2 -translate-x-1/2 left-1/2 bottom-0 ">
          <h1 className="font-black text-4xl line-clamp-1">{params.slug}</h1>
          <div className="flex justify-between items-center ps-2">
            <div className="flex flex-row flex-nowrap gap-1">
              <span className="after:content-[',']">tags</span>
              <span className="after:content-[',']">tags</span>
              <span className="after:content-[',']">tags</span>
              <span>tags</span>
            </div>
            <h4>{new Date().toLocaleDateString()}</h4>
          </div>
        </div>
      </div>
      <p className="px-3">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur,
        assumenda cupiditate. Nemo odio facilis ad voluptatum a exercitationem
        quidem ea adipisci recusandae soluta voluptatem minima, nam veniam
        corporis enim accusamus expedita optio? Incidunt enim error earum! Natus
        eius blanditiis veniam in, corporis quaerat nihil quasi distinctio, odit
        aliquid delectus nisi eum qui! Quaerat veritatis repudiandae neque
        fugiat? Porro cumque voluptatem dolores in ipsam eveniet voluptatum
        modi. Repellat in veniam obcaecati velit vero explicabo repellendus
        voluptate earum quod aperiam doloribus voluptates, voluptatum totam,
        blanditiis beatae ut et numquam deserunt, labore expedita quidem
        deleniti laboriosam. Provident nulla voluptatum dolorum est veritatis
        modi molestiae reprehenderit ducimus hic ea. Placeat iure nisi obcaecati
        ex delectus. Harum blanditiis enim asperiores cupiditate id, aliquam
        est. Dolor eius ut at nobis optio aliquid fuga explicabo qui nam
        voluptatum? Ut id corrupti ipsam at, eum consectetur laudantium facere
        cumque ducimus itaque, sunt necessitatibus, quae rerum. Odit, fuga
        necessitatibus. Incidunt, autem dolorem sequi aperiam in delectus, id
        perferendis iure, ad optio corporis aliquam itaque? Fuga quidem
        consectetur veniam repellendus quisquam labore quis autem esse aliquid
        laboriosam maiores atque excepturi a neque eligendi ea sunt tenetur
        deleniti, et nemo. Quaerat repellendus fuga voluptates illo commodi quas
        quod magni eveniet, incidunt sequi! Distinctio voluptas ducimus ad
        repellendus molestias laboriosam odio at ipsa quisquam voluptates
        doloribus alias enim tempore cupiditate iusto officia officiis ut sed
        ab, pariatur corporis totam magnam. Officiis totam adipisci laboriosam
        fugiat cumque quasi libero, voluptas porro, soluta voluptate
        reprehenderit iure? Necessitatibus ipsam esse dicta quae aperiam amet,
        inventore vero ad reiciendis eius molestiae aliquam explicabo odio culpa
        veniam in cupiditate harum iste maxime porro dolore optio quam modi?
        Voluptatem earum hic laboriosam id quasi blanditiis excepturi,
        dignissimos qui doloremque ipsum quod ipsa molestiae officia ipsam, rem
        aperiam nobis porro dolores laborum! Praesentium perspiciatis, ducimus,
        quisquam distinctio architecto eaque accusamus tempora non numquam
        pariatur inventore ab doloribus nesciunt mollitia omnis! Esse laudantium
        quidem error. Pariatur temporibus amet animi exercitationem dolorem
        quaerat eum? Eaque, ducimus neque suscipit corrupti voluptate
        consequatur, laborum explicabo nostrum nihil, nulla sapiente quod! Sunt,
        minus. Illum aperiam sed in accusamus placeat corporis vero. Earum,
        vitae molestiae fugit vero quaerat necessitatibus facere ad recusandae
        iusto laboriosam amet officia at incidunt cum? Reiciendis, delectus
        omnis aliquid velit nam alias sint suscipit perferendis aspernatur,
        labore, quod quam dolore quibusdam quaerat similique eaque? Ullam totam
        delectus explicabo iusto, commodi quis quae repellendus consequatur
        doloribus magni! Eum neque vitae vel est eius nihil deserunt doloremque
        sit. Tenetur error laboriosam fuga recusandae, maxime deleniti, quo
        sapiente at expedita in dolor laborum iure magni natus dolorum atque
        omnis et accusamus amet porro? Suscipit consequatur eaque, in reiciendis
        facilis minus at ipsam beatae aperiam numquam vel, eveniet odit modi.
        Quos aspernatur iusto ea in aliquam alias nihil magni, voluptates omnis
        sequi hic? Totam, consectetur. Laboriosam magnam temporibus atque
        distinctio accusamus harum dolor animi tenetur architecto quod modi a,
        sed minima incidunt iusto vel ratione aliquam veniam. Qui dolorem autem
        atque eum nostrum non magni explicabo a minus pariatur debitis quaerat
        illum, quidem velit voluptates!
      </p>
      <div className=" rounded-lg px-5 py-2 w-[calc(100%-20px)] h-20 mt-5 flex justify-center items-center gap-5">
        <Link
          href="#"
          className="bg-button hover:bg-secondary px-5 py-2 rounded-lg border"
        >
          Code
        </Link>
        <Link
          href="#"
          className="bg-button hover:bg-secondary px-5 py-2 rounded-lg border"
        >
          Demo
        </Link>
      </div>
    </article>
  );
}
