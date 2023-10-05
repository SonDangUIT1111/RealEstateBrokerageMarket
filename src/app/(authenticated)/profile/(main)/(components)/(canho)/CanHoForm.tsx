/* eslint-disable @typescript-eslint/no-unused-vars */
import { Form } from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { SelectNoiThat } from '../SelectNoiThat';
import { HuongCanHo } from './HuongCanHo';

const canHoSchema = z.object({
  chieuDai: z.string().nonempty({ message: 'Chiều dài không được để trống' }),
  chieuRong: z.string().nonempty({ message: 'Chiều rộng không được để trống' }),
});

export const CanHoForm = () => {
  const [phongNgu, setPhongNgu] = React.useState();
  const [phongTam, setPhongTam] = React.useState();
  const [noiThat, setNoiThat] = React.useState();
  const [huongBanCong, setHuongBanCong] = React.useState();
  const [huongCuaChinh, setHuongCuaChinh] = React.useState();
  const [soTang, setSoTang] = React.useState();
  console.log(phongNgu, phongTam);
  const form = useForm<z.infer<typeof canHoSchema>>({
    resolver: zodResolver(canHoSchema),
  });
  console.log(form);
  return (
    <Form {...form}>
      <form className="flex flex-col space-y-6 max-w-xs lg:max-w-lg">
        <SelectNoiThat
          setPhongNgu={setPhongNgu}
          setPhongTam={setPhongTam}
          setNoiThat={setNoiThat}
          setSoTang={setSoTang}
        />
        <HuongCanHo
          setHuongBanCong={setHuongBanCong}
          setHuongCuaChinh={setHuongCuaChinh}
        />
      </form>
    </Form>
  );
};
