package com.divep.impordivep;

import com.divep.impordivep.config.AsyncSyncConfiguration;
import com.divep.impordivep.config.EmbeddedElasticsearch;
import com.divep.impordivep.config.EmbeddedKafka;
import com.divep.impordivep.config.EmbeddedSQL;
import com.divep.impordivep.config.JacksonConfiguration;
import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;
import org.springframework.boot.test.context.SpringBootTest;

/**
 * Base composite annotation for integration tests.
 */
@Target(ElementType.TYPE)
@Retention(RetentionPolicy.RUNTIME)
@SpringBootTest(classes = { JhipsterImporDivepApplicationApp.class, JacksonConfiguration.class, AsyncSyncConfiguration.class })
@EmbeddedElasticsearch
@EmbeddedSQL
@EmbeddedKafka
public @interface IntegrationTest {
}
