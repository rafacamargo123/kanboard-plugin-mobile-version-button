<?php

namespace Kanboard\Plugin\MobileVersionButton;

use Kanboard\Core\Plugin\Base;
use Kanboard\Core\Translator;

class Plugin extends Base
{
    public function initialize()
    {
        $this->hook->on('template:layout:js', array('template' => 'plugins/MobileVersionButton/assets/js/mobile-button.js'));
        $this->template->hook->attach('template:layout:top', 'MobileVersionButton:layout/top');
    }

    public function onStartup()
    {
        // Translation
        Translator::load($this->languageModel->getCurrentLanguage(), __DIR__.'/Locale');
    }


    public function getPluginName()
    {
        return "Mobile Version Button";
    }

    public function getPluginDescription()
    {
        return t('Add a button to the topbar to switch between desktop and mobile version');
    }

    public function getPluginAuthor()
    {
        return 'Rafael de Camargo';
    }

    public function getPluginVersion()
    {
        return '1.0.0';
    }

    public function getPluginHomepage()
    {
        return 'https://gitlab.com/rafaelcamargo/kanboard-plugin-mobile-button';
    }
}
