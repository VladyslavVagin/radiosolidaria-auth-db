import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";
import DashboardMain from "@/components/dashboard/DashboardMain";
import css from "./page.module.css";

const dashboard = async () => {
    const session = await getServerSession(options);

    if(!session) {
      redirect('/api/auth/signin/?callbackUrl=/dashboard')
    }

  return (
    <section className={css.section}>
      <DashboardMain />
    </section>
  )
}

export default dashboard