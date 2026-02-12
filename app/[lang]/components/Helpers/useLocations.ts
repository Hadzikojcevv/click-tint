"use client"

import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

type Location = {
    name: string;
    city: string;
    country: string;
    firm?: string;
    phone?: string;
    email: string;
    lat?: number;
    lng?: number;
}

export const locations = [
    {
      name: 'Vlatko Hadjikojcev',
      city: 'Gevgelija, NMK',
      country: 'MK',
      firm: 'Клик Тинт ДООЕЛ',
      phone: '+38972277766',
      email: 'vh@click-tint.com',
      lat: 41.1377466,
      lng: 22.499144
    },
    // {
    //   name: 'Todor Sterjov',
    //   city: 'Struga, NMK',
    //   country: 'MK',
    //   phone: '+38970358802',
    //   email: 'ts@click-tint.com',
    //   lat: 41.1778,
    //   lng: 20.6783
    // },
    {
      name: 'Christos Gridoriadis',
      city: 'Thessaloniki, GR',
      country: 'GR',
      firm: 'Click-tint E.E.',
      phone: '+306988108810',
      email: 'cg@click-tint.com',
      lat: 40.6401,
      lng: 22.9444
    },
    {
      name: 'Bojan Dosljak',
      city: 'Belgrade, RS',
      firm: 'ClickTint DOO',
      country: 'RS',
      phone: '+38162268686',
      email: 'bd@click-tint.com',
      lat: 44.8125,
      lng: 20.4612
    },
    // {
    //   name: 'Jovanche Mirchevski',
    //   city: 'Skopje, NMK',
    //   country: 'MK',
    //   firm: 'Барбун Дооел',
    //   phone: '+38970331710',
    //   email: 'jm@click-tint.com',
    //   lat: 41.9981,
    //   lng: 21.4254
    // },
    // {
    //   name: 'Igor Zifovski',
    //   city: 'Radovish, NMK',
    //   country: 'MK',
    //   firm: 'Роло-Инг ДООЕЛ',
    //   phone: '+38971204316',
    //   email: 'vh@click-tint.com',
    //   lat: 41.6315489,
    //   lng: 22.4615846
    // },
    {
      name: 'Viktor Stavrev',
      city: 'Sofia, BG',
      country: 'BG',
      phone: '+359885125014',
      email: 'info@click-tint.com',
      lat: 42.6977,
      lng: 23.3219
    },
    // {
    //   name: 'Ante Zharko',
    //   city: 'Zagreb, HR',
    //   country: 'HR',
    //   phone: '+385919785148',
    //   email: 'az@click-tint.com',
    //   lat: 45.815,
    //   lng: 15.9819
    // },
    // {
    //   name: 'Luciano Genzani',
    //   city: 'São Paulo, BR',
    //   country: 'BR',
    //   email: 'lucgenzani@gmail.com',
    //   lat: -23.533773,
    //   lng: -46.62529
    // },
    // {
    //   name: 'Mike Makris',
    //   city: 'The Hague, NL',
    //   country: 'NL',
    //   phone: "+31649906271",
    //   email: 'Office@click-tint.com',
    //   lat: 52.0705,
    //   lng: 4.3007
    // }
  ]

export const useLocations = () => {

    const [finalLocations, setFinalLocations] = useState<Location[]>([])
    const pathname = usePathname()
    const pathnameToFilter = pathname.split('/')[1].toUpperCase()

    const allLocations = locations

    const formulateLocations = () => {

        if(pathname !== '/en' && pathname !== '/mk'){

            let filteredLocations = []

            const selectedCard = allLocations.find(location => location.country === pathnameToFilter)

            filteredLocations = [selectedCard, ...allLocations]

            const finalFormulatedLocations = Array.from(new Set(filteredLocations))

            setFinalLocations(finalFormulatedLocations as Location[])

        }else {
            setFinalLocations(locations)

        }
    }

    useEffect(() => {
        formulateLocations()
    },[])

    return finalLocations
}