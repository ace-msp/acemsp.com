<script setup lang="ts">
import { reactive } from 'vue'

import type { FormData } from '@/includes/types'

import ItemScroller from '@/components/ItemScroller.vue'
import ScrollLink from '@/components/ScrollLink.vue'

const formData = reactive<FormData>({
  company: '',
  email: '',
  phone: '',
  message: '',
  name: '',
})

const scrollItems = [
  { icon: 'android', label: 'Android', prefix: 'fab' },
  { icon: 'apple', label: 'Apple', prefix: 'fab' },
  { icon: 'aws', label: 'AWS', prefix: 'fab' },
  { icon: 'google', label: 'Google', prefix: 'fab' },
  { icon: 'mobile', label: 'iOS', prefix: 'fas' },
  { icon: 'linux', label: 'Linux', prefix: 'fab' },
  { icon: 'laptop', label: 'macOS', prefix: 'fas' },
  { icon: 'microsoft', label: 'Microsoft', prefix: 'fab' },
]

function handleSubmit() {
  if (!formData.email) {
    alert('Please provide an email address.')
  } else if (!formData.phone) {
    alert('Please provide a phone number.')
  } else if (!formData.message) {
    alert('Please provide a message.')
  } else if (!formData.name) {
    alert('Please provide a name.')
  } else {
    console.log(formData)
  }
}
</script>

<template>
  <div class="home" id="home">
    <div class="hero flex-center flex-column">
      <div class="flex-between flex-row">
        <div class="flex-column flex-full flex-start">
          <h1 class="fg-primary">Your Trusted Partner in IT Managed Services</h1>
          <h2 class="fg-secondary mar-b-1">
            Proactive, Reliable, and Scalable IT Solutions for Your Business
          </h2>
          <ScrollLink classes="btn-primary" to="contact">
            <fa-icon :icon="['fas', 'phone']" />
            <span>Contact Us Today</span>
          </ScrollLink>
        </div>
        <div class="flex-full">
          <img alt="IT Support" src="@/assets/images/it-support-team.png" />
        </div>
      </div>
    </div>
    <div class="bg-background">
      <div class="section">
        <h2 class="fg-primary txt-center">Key Benefits</h2>
        <div class="flex-between flex-gap flex-row txt-big txt-center">
          <div class="card flex-center flex-column flex-full">
            <fa-icon class="txt-bigger" :icon="['fas', 'pager']" />
            <h4>24/7 Support</h4>
            <div>Always here when you need us - day or night.</div>
          </div>
          <div class="card flex-center flex-column flex-full">
            <fa-icon class="txt-bigger" :icon="['fas', 'shield']" />
            <h4>Cybersecurity</h4>
            <div>Protecting your business from evolving threats.</div>
          </div>
          <div class="card flex-center flex-column flex-full">
            <fa-icon class="txt-bigger" :icon="['fas', 'cloud']" />
            <h4>Cloud Solutions</h4>
            <div>Scalable, secure, and efficient cloud services.</div>
          </div>
          <div class="card flex-center flex-column flex-full">
            <fa-icon class="txt-bigger" :icon="['fas', 'certificate']" />
            <h4>Cost Efficiency</h4>
            <div>Maximize your IT budget with predictable costs.</div>
          </div>
        </div>
      </div>
    </div>
    <ItemScroller :items="scrollItems" />
    <div class="section" id="info">
      <div class="flex-between flex-row">
        <div class="flex-full">
          <img
            alt="Managed Service Provider"
            src="@/assets/images/network.png"
            style="height: 20vh"
          />
        </div>
        <div class="flex-column flex-full flex-start">
          <div class="">
            <h2 class="fg-primary">We answer 99.9% of calls in</h2>
            <h1 class="fg-secondary">Under 5-minutes</h1>
          </div>
          <p class="txt-big">
            Our focus on automation and proactive service means our clients rarely need to call us.
            But sometimes, you need to talk to someone immediately.
          </p>
          <p class="txt-big">
            That's where we shine! With a staff of local people, available 24/7, we're right there
            when you need us—<b>ready to answer right away</b>.
          </p>
          <p class="txt-big">
            Isn't it time your small or mid-sized business experienced this level of IT service?
          </p>
          <ScrollLink classes="btn-primary" to="contact">
            <fa-icon :icon="['fas', 'users']" />
            <span>Talk to an expert</span>
          </ScrollLink>
        </div>
      </div>
    </div>
    <div class="bg-background" id="services">
      <div class="section">
        <div class="flex-center flex-column">
          <h2 class="fg-primary">Comprehensive IT Managed Services</h2>
          <h3>Tailored Solutions to Meet Your Business Needs</h3>
          <p class="txt-big">
            At Ace MSP, we understand that every business is unique. That's why we offer a full
            suite of IT services designed to keep your operations running smoothly, securely, and
            efficiently. From proactive support to cutting-edge cybersecurity, we've got you
            covered.
          </p>
        </div>
        <div class="flex-between flex-gap flex-row">
          <div class="bg-primary card flex-column flex-full flex-stretch txt-big">
            <h4>24/7 Proactive Monitoring and Support</h4>
            <p>
              Customers want peace of mind knowing their IT systems are always being watched. Ace
              MSP's round-the-clock monitoring ensures issues are detected and resolved before they
              disrupt business operations.
            </p>
            <p>
              We don't wait for problems to happen - we prevent them. With 24/7 monitoring, your
              business is always protected.
            </p>
          </div>
          <div class="bg-primary card flex-column flex-full flex-stretch txt-big">
            <h4>Enterprise-Grade Cybersecurity Solutions</h4>
            <p>
              Cyber threats are on the rise, and businesses need robust protection. Ace MSP offers
              advanced cybersecurity measures, including threat detection, firewalls, encryption,
              and compliance management.
            </p>
            <p>
              Don't risk your business to cybercriminals. Our cutting-edge cybersecurity solutions
              keep your data safe and your operations secure.
            </p>
          </div>
          <div class="bg-primary card flex-column flex-full flex-stretch txt-big">
            <h4>Customized IT Solutions for Every Industry</h4>
            <p>
              One-size-fits-all IT doesn't work. Ace MSP tailors its services to meet the unique
              needs of industries like healthcare, finance, legal, manufacturing, and more.
            </p>
            <p>
              We speak your industry's language. Our customized IT solutions are designed to address
              your specific challenges and goals.
            </p>
          </div>
          <div class="bg-primary card flex-column flex-full flex-stretch txt-big">
            <h4>Predictable, Fixed Monthly Pricing</h4>
            <p>
              Businesses love transparency and cost control. Ace MSP offers flat-rate pricing with
              no hidden fees, making IT budgeting simple and predictable.
            </p>
            <p>
              Say goodbye to surprise IT bills. Our fixed monthly pricing gives you peace of mind
              and full control over your IT expenses.
            </p>
          </div>
          <div class="bg-primary card flex-column flex-full flex-stretch txt-big">
            <h4>Rapid Response Times and Dedicated Account Managers</h4>
            <p>
              When IT issues arise, customers need fast, reliable support. Ace MSP guarantees quick
              response times and assigns a dedicated account manager to every client.
            </p>
            <p>
              We're not just your IT provider - we're your partner. With rapid response times and a
              dedicated account manager, you'll always have someone in your corner.
            </p>
          </div>
          <div class="bg-primary card flex-column flex-full flex-stretch txt-big">
            <h4>Scalable Cloud Solutions for Growing Businesses</h4>
            <p>
              As businesses grow, their IT needs evolve. Ace MSP provides scalable cloud solutions
              that grow with your business, ensuring you're never held back by outdated technology.
            </p>
            <p>
              Your business is growing - your IT should too. Our scalable cloud solutions ensure
              you're always ready for what's next.
            </p>
          </div>
          <div class="bg-primary card flex-column flex-full flex-stretch txt-big">
            <h4>Comprehensive Disaster Recovery and Backup Services</h4>
            <p>
              Data loss can be catastrophic. Ace MSP offers robust backup and disaster recovery
              solutions to ensure business continuity, no matter what happens.
            </p>
            <p>
              Don't let a disaster shut you down. Our backup and recovery solutions ensure your data
              is safe and your business is always up and running.
            </p>
          </div>
          <div class="bg-primary card flex-column flex-full flex-stretch txt-big">
            <h4>Expert IT Consulting and Strategic Planning</h4>
            <p>
              Businesses need a clear IT roadmap to stay competitive. Ace MSP's consulting services
              help align technology with business goals for long-term success.
            </p>
            <p>
              We don't just fix problems - we help you plan for the future. Our IT consulting
              services ensure your technology drives your business forward.
            </p>
          </div>
          <div class="bg-primary card flex-column flex-full flex-stretch txt-big">
            <h4>Cutting-Edge Technology and Innovation</h4>
            <p>
              Staying ahead of the curve is critical in today's fast-paced world. Ace MSP leverages
              the latest technology and tools to deliver innovative solutions.
            </p>
            <p>
              We're not just keeping up with technology - we're leading the way. Partner with us to
              stay ahead of the competition.
            </p>
          </div>
          <div class="bg-primary card flex-column flex-full flex-stretch txt-big">
            <h4>Proven Track Record with Client Success Stories</h4>
            <p>
              Customers want proof that Ace MSP delivers results. Highlighting case studies,
              testimonials, and measurable outcomes builds trust and credivility.
            </p>
            <p>
              Don't just take our word for it - see what our clients have to say. We've helped
              businesses like yours achieve [specific results, e.g., 40% cost savings, 99.9%
              uptime].
            </p>
          </div>
          <div class="bg-attention card flex-column flex-full flex-stretch txt-big">
            <h4>Free IT Assessment or Consultation</h4>
            <p>
              Offering a no-obligation, free assessment or consultation lowers the barrier for
              potential customers to engage with Ace MSP.
            </p>
            <p>
              Curious how we can help? Let's start with a free IT assessment. No strings attached -
              just actionable insights to improve your business.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-primary" id="pricing">
      <div class="section">
        <h2 class="fg-highlight txt-center">Ace MSP Pricing Options</h2>
        <div class="flex-center flex-gap flex-row">
          <div class="card flex-column flex-full txt-big">
            <div class="flex-center flex-gap flex-row">
              <div class="fg-attention min txt-big">Basic Plan:</div>
              <div class="flex-full">Essential IT Support</div>
            </div>
            <div class="flex-gap flex-row">
              <div class="min txt-bold">Target Audience:</div>
              <div class="flex-full">Small businesses or startups with minimal IT needs.</div>
            </div>
            <div class="flex-gap flex-row">
              <div class="min txt-bold">Price:</div>
              <div class="flex-full">
                500-1,000/month (depending on the number of users/devices).
              </div>
            </div>
            <div class="flex-gap flex-row">
              <div class="min txt-bold">Features:</div>
              <div class="flex-full">
                <ul>
                  <li>24/7 Monitoring and Alerting</li>
                  <li>Helpdesk Support (8x5)</li>
                  <li>Basic Cybersecurity (Firewall, Antivirus)</li>
                  <li>Remote Troubleshooting</li>
                  <li>Monthly Reporting</li>
                </ul>
              </div>
            </div>
            <div class="flex-gap flex-row">
              <div class="min txt-bold">Why It's Great:</div>
              <div class="flex-full">
                Affordable, entry-level support for businesses that need reliable IT without
                breaking the bank.
              </div>
            </div>
          </div>
          <div class="card flex-column flex-full txt-big">
            <div class="flex-center flex-gap flex-row">
              <div class="fg-attention min txt-big">Standard Plan:</div>
              <div class="flex-full">Proactive IT Management</div>
            </div>
            <div class="flex-gap flex-row">
              <div class="min txt-bold">Target Audience:</div>
              <div class="flex-full">
                Growing small-to-medium businesses (SMBs) with more complex IT needs.
              </div>
            </div>
            <div class="flex-gap flex-row">
              <div class="min txt-bold">Price:</div>
              <div class="flex-full">
                1,500-3,000/month (depending on the number of users/devices).
              </div>
            </div>
            <div class="flex-gap flex-row">
              <div class="min txt-bold">Features:</div>
              <div class="flex-full">
                <ul>
                  <li>Everything in the Basic Plan</li>
                  <li>24/7 Helpdesk Support</li>
                  <li>Advanced Cybersecurity (Threat Detection, Patch Management)</li>
                  <li>Network Management and Optimization</li>
                  <li>Cloud Backup and Data Recovery</li>
                  <li>Quarterly IT Strategy Reviews</li>
                </ul>
              </div>
            </div>
            <div class="flex-gap flex-row">
              <div class="min txt-bold">Why It's Great:</div>
              <div class="flex-full">
                A comprehensive solution for businesses that want proactive IT management and
                enhanced security.
              </div>
            </div>
          </div>
          <div class="card flex-column flex-full txt-big">
            <div class="flex-center flex-gap flex-row">
              <div class="fg-attention min txt-big">Premium Plan:</div>
              <div class="flex-full">Fully Managed IT Services</div>
            </div>
            <div class="flex-gap flex-row">
              <div class="min txt-bold">Target Audience:</div>
              <div class="flex-full">
                Medium-to-large businesses with mission-critical IT systems.
              </div>
            </div>
            <div class="flex-gap flex-row">
              <div class="min txt-bold">Price:</div>
              <div class="flex-full">
                5,000-10,000+/month (depending on the number of users/devices and complexity).
              </div>
            </div>
            <div class="flex-gap flex-row">
              <div class="min txt-bold">Features:</div>
              <div class="flex-full">
                <ul>
                  <li>Everything in the Standard Plan</li>
                  <li>Dedicated Account Manager</li>
                  <li>Enterprise-Grade Cybersecurity (SIEM, Endpoint Detection & Response)</li>
                  <li>Full Cloud Management (Migration, Optimization, Monitoring)</li>
                  <li>Onsite Support (as needed)</li>
                  <li>Custom IT Roadmaps and Strategic Planning</li>
                  <li>Vendor Management</li>
                </ul>
              </div>
            </div>
            <div class="flex-gap flex-row">
              <div class="min txt-bold">Why It's Great:</div>
              <div class="flex-full">
                A premium, all-inclusive package for businesses that demand top-tier IT support and
                strategic guidance.
              </div>
            </div>
          </div>
          <div class="card flex-column flex-full txt-big">
            <div class="flex-center flex-gap flex-row">
              <div class="fg-attention min txt-big">Enterprise Plan:</div>
              <div class="flex-full">Tailored Solutions</div>
            </div>
            <div class="flex-gap flex-row">
              <div class="min txt-bold">Target Audience:</div>
              <div class="flex-full">
                Large enterprises or businesses with unique IT requirements.
              </div>
            </div>
            <div class="flex-gap flex-row">
              <div class="min txt-bold">Price:</div>
              <div class="flex-full">Custom (based on scope and scale).</div>
            </div>
            <div class="flex-gap flex-row">
              <div class="min txt-bold">Features:</div>
              <div class="flex-full">
                <ul>
                  <li>Fully Customizable Services</li>
                  <li>24/7 Dedicated Support Team</li>
                  <li>Advanced Disaster Recovery and Business Continuity Planning</li>
                  <li>Compliance Management (HIPAA, GDPR, etc.)</li>
                  <li>Custom Software Development and Integration</li>
                  <li>Unlimited Onsite Support</li>
                </ul>
              </div>
            </div>
            <div class="flex-gap flex-row">
              <div class="min txt-bold">Why It's Great:</div>
              <div class="flex-full">
                A bespoke solution for businesses that need a highly personalized IT strategy.
              </div>
            </div>
          </div>
          <div class="card flex-column flex-full txt-big">
            <div class="flex-center flex-gap flex-row">
              <div class="fg-attention min">Add-On Services:</div>
              <div class="flex-full"></div>
            </div>
            <div class="flex-gap flex-row">
              <div class="min txt-bold">Target Audience:</div>
              <div class="flex-full">
                Businesses that need additional services beyond their core plan.
              </div>
            </div>
            <div class="flex-gap flex-row">
              <div class="min txt-bold">Options:</div>
              <div class="flex-full">
                <ul>
                  <li>
                    <b>Cybersecurity Add-On:</b> 500-1,000/month - Includes advanced threat
                    detection, penetration testing, and employee training.
                  </li>
                  <li>
                    <b>Cloud Management Add-On:</b> 300-800/month - Includes cloud migration,
                    optimization, and ongoing management.
                  </li>
                  <li>
                    <b>VoIP and Unified Communications:</b> 200-500/month - Includes setup,
                    management, and support for business phone systems and video conferencing.
                  </li>
                  <li>
                    <b>Compliance and Risk Management:</b> 1,000-2,000/month - Includes audits,
                    policy development, and compliance reporting.
                  </li>
                  <li>
                    <b>Onsite Support:</b> 150-300/hour - For businesses that require in-person
                    assistance.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="card flex-column flex-full txt-big">
            <div class="flex-center flex-gap flex-row">
              <div class="fg-attention min">One-Time Services:</div>
              <div class="flex-full"></div>
            </div>
            <div class="flex-gap flex-row">
              <div class="min txt-bold">Target Audience:</div>
              <div class="flex-full">Businesses that need specific, short-term IT assistance.</div>
            </div>
            <div class="flex-gap flex-row">
              <div class="min txt-bold">Options:</div>
              <div class="flex-full">
                <ul>
                  <li>
                    <b>IT Assessment and Audit:</b> 1,000-3,000 - A comprehensive review of your IT
                    infrastructure with actionable recommendations.
                  </li>
                  <li>
                    <b>Cybersecurity Risk Assessment:</b> 1,500-5,000 - Identify vulnerabilities and
                    develop a plan to mitigate risks.
                  </li>
                  <li>
                    <b>Cloud Migration:</b> 2,000-10,000+ - Seamless migration to the cloud with
                    minimal downtime.
                  </li>
                  <li>
                    <b>Disaster Recovery Planning:</b> 2,500-7,500 - Develop and implement a robust
                    disaster recovery strategy.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-white" id="contact">
      <div class="section">
        <h2 class="fg-primary txt-center">Let's Build Your IT Future Together</h2>
        <div class="flex-gap flex-start flex-row">
          <div class="flex-full">
            <form @submit.prevent="handleSubmit" class="flex-column flex-gap">
              <div class="flex-between flex-gap flex-row">
                <div class="flex-column">
                  <div class="txt-big">Name:</div>
                  <input name="name" placeholder="Full Name" type="text" v-model="formData.name" />
                </div>
                <div class="flex-column">
                  <div class="txt-big">Company:</div>
                  <input
                    name="company"
                    placeholder="Company Name"
                    type="text"
                    v-model="formData.company"
                  />
                </div>
              </div>
              <div class="flex-between flex-gap flex-row">
                <div class="flex-column">
                  <div class="txt-big">Email</div>
                  <input
                    name="email"
                    placeholder="Email Address"
                    type="email"
                    v-model="formData.email"
                  />
                </div>
                <div class="flex-column">
                  <div class="txt-big">Phone:</div>
                  <input
                    name="phone"
                    placeholder="Phone Number"
                    type="tel"
                    v-model="formData.phone"
                  />
                </div>
              </div>
              <div class="flex-column">
                <div class="txt-big">Message:</div>
                <textarea
                  name="message"
                  placeholder="Provide a description of your question or concern."
                  rows="5"
                  type="text"
                  v-model="formData.message"
                />
              </div>
              <div class="flex-center flex-gap flex-row">
                <input class="btn-primary" type="submit" />
                <input class="btn-secondary" type="reset" />
              </div>
            </form>
          </div>
          <div class="flex-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d310646.14075983147!2d-97.10564303961061!3d33.21105831224435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864cf04bd8f4e863%3A0x453a216bef92a809!2sWhitesboro%2C%20TX%2076273!5e0!3m2!1sen!2sus!4v1739124137643!5m2!1sen!2sus"
              width="100%"
              height="480"
              style="border: 0"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home {
  img {
    height: 25vh;
    width: auto;
  }

  #contact {
    @media screen and (max-width: $sm) {
      .flex-row {
        align-items: center;
      }
    }

    input {
      width: 11em;

      @media screen and (max-width: $sm) {
        width: 80vw;
      }
    }
  }

  #info,
  #services {
    @media screen and (max-width: $sm) {
      text-align: center;

      .flex-start {
        align-items: center;
        justify-content: center;
      }
    }
  }

  #pricing .card {
    min-width: 100%;

    @media screen and (max-width: $sm) {
      min-width: auto;
    }
  }

  #services .card {
    min-width: 25%;
  }

  .hero {
    background-color: $white;
    max-width: $xl;
    margin: 0 auto;
    padding: 2em 0;

    @media screen and (max-width: $sm) {
      text-align: center;

      .flex-start {
        align-items: center;
        justify-content: center;
      }
    }
  }

  .min {
    min-width: 15vw;
    text-align: right;

    @media screen and (max-width: $sm) {
      margin-top: 1em;
      min-width: 0;
      text-align: left;
    }
  }

  .section {
    .flex-row {
      svg {
        margin-right: 0.25em;
      }
    }
  }
}
</style>
