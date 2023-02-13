import { HeroContainer, HomeContainer, ImagePreview } from "./styles";
import LogoImg from '../assets/logo.svg'
import PreviewImage from '../assets/preview.png'
import Image from 'next/image'
import { ClaimUserNameForm } from "@/components/ClaimUserNameForm";
import { useSession } from "next-auth/react";
import { useRouter } from 'next/router'
export default function Home() {

  const session = useSession()
  const router = useRouter()

  const isSignedIn = session.status === "authenticated"

  // if (isSignedIn) {
  //   router.push('/transactions')
  // }

  return (
    <HomeContainer>
      <HeroContainer>
        <Image
          src={LogoImg}
          alt=""
          priority
        />

        <p>Se torne sábio nos seus gastos e comece a economizar dinheiro,
          gerencie seus gastos de maneira simples e eficiente.</p>

        <ClaimUserNameForm />

      </HeroContainer>

      <ImagePreview>
        <Image
          src={PreviewImage}
          alt=""
          quality={100}
          priority
          height={400}
        />
      </ImagePreview>
    </HomeContainer >
  )
}
