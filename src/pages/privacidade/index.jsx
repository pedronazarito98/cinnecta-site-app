import React from 'react';
import { Seo } from '../../components/Seo';
import Layout from '../../templates/MainTemplate';
import { PrivacyText } from '../../view/privacy/privacyText/privacyText';

export default function Privacy(){
    return (
      <Layout>
        <Seo title="Privacidade" />
        <PrivacyText />
      </Layout>
    );
}